/* Reglas de negocio. Aquí no se toca el DOM: cada acción valida, cambia los datos y devuelve
   { ok, mensaje } para que la pantalla decida qué mostrar. */

const LIMITE_POCO_STOCK = 8;
const resultadoOk = (mensaje, extra = {}) => ({ ok: true, mensaje, ...extra });
const resultadoError = (mensaje) => ({ ok: false, mensaje });

const Reglas = {
  /* ---------- Consultas ---------- */

  productosConPocoStock() {
    return Datos.estado.productos.filter((p) => p.stock < LIMITE_POCO_STOCK);
  },

  lineasCarrito() {
    return Object.entries(Datos.estado.carrito).map(([indice, cantidad]) => {
      const producto = Datos.estado.productos[indice];
      return { indice: Number(indice), producto, cantidad, subtotal: producto.precio * cantidad };
    });
  },

  totalCarrito() {
    return sumar(this.lineasCarrito().map((linea) => linea.subtotal));
  },

  totalVentas() {
    return sumar(Datos.estado.ventas.map((v) => v.total));
  },

  salidasPendientes() {
    return Datos.estado.salidas.filter((s) => s.estado === 'pendiente');
  },

  salidasLiquidadas() {
    return Datos.estado.salidas.filter((s) => s.estado === 'liquidada');
  },

  totalRendiciones() {
    return sumar(this.salidasLiquidadas().map((s) => s.recibido));
  },

  totalIngresos() {
    return this.totalVentas() + this.totalRendiciones();
  },

  ingresosPorDia() {
    return [...Datos.estado.ingresosPorDia, ['Hoy', this.totalIngresos()]];
  },

  ingresosSemanaEnCurso() {
    return sumar(Datos.estado.ingresosPorDia.map((dia) => dia[1])) + this.totalIngresos();
  },

  ingresosPorSemana() {
    return [...Datos.estado.ingresosPorSemana, ['Esta semana', this.ingresosSemanaEnCurso()]];
  },

  efectivoEsperado() {
    const caja = Datos.estado.caja;
    return caja.montoInicial + caja.efectivo + caja.rendiciones;
  },

  salidaPendienteDe(canastero) {
    return this.salidasPendientes().find((s) => s.canastero === canastero);
  },

  estadoCanastero(canastero) {
    if (this.salidaPendienteDe(canastero)) return 'En la calle';
    const yaRindio = Datos.estado.salidas.some((s) => s.canastero === canastero);
    return yaRindio ? 'Liquidado' : 'Sin salida';
  },

  /* devueltas: { indiceProducto: cantidad } */
  montoARendir(salida, devueltas) {
    return sumar(Object.entries(salida.items).map(([indice, entregadas]) => {
      const vendidas = entregadas - (devueltas[indice] || 0);
      return vendidas * Datos.estado.productos[indice].precio;
    }));
  },

  resumenProduccion() {
    const horneadas = Datos.estado.horneadas;
    return {
      cantidad: horneadas.length,
      unidades: sumar(horneadas.map((h) => h.cantidad)),
      ultima: horneadas[0] || null,
    };
  },

  totalBorradorPedido() {
    return sumar(Datos.estado.borradorPedido.map((l) => Datos.estado.productos[l.indice].precio * l.cantidad));
  },

  /* ---------- Caja (CU-02 y CU-04) ---------- */

  abrirCaja(monto) {
    const estado = Datos.estado;
    if (estado.caja.abierta) return resultadoError('Ya hay una caja abierta.');
    if (!Number.isFinite(monto) || monto < 0) return resultadoError('Ingresá un monto inicial válido.');
    estado.caja = { abierta: true, montoInicial: monto, efectivo: 0, tarjeta: 0, transferencia: 0, rendiciones: 0, cantidadVentas: 0, cierre: null };
    Datos.guardar();
    return resultadoOk('Caja abierta con ' + formatoGs(monto) + '.');
  },

  verificarCierre(contado, observacion) {
    if (!Datos.estado.caja.abierta) return resultadoError('No hay una caja abierta.');
    if (contado === null) return resultadoError('Ingresá el efectivo contado.');
    const diferencia = contado - this.efectivoEsperado();
    if (diferencia !== 0 && !observacion.trim()) return resultadoError('Hay diferencia: escribí una observación para cerrar.');
    return resultadoOk('');
  },

  cerrarCaja(contado, observacion) {
    const verificacion = this.verificarCierre(contado, observacion);
    if (!verificacion.ok) return verificacion;
    const esperado = this.efectivoEsperado();
    const caja = Datos.estado.caja;
    caja.abierta = false;
    caja.cierre = { esperado, contado, diferencia: contado - esperado, observacion };
    Datos.guardar();
    return resultadoOk('Caja cerrada. Resumen del arqueo guardado.');
  },

  /* ---------- Venta (CU-03 y CU-11) ---------- */

  agregarAlCarrito(indice) {
    const producto = Datos.estado.productos[indice];
    const enCarrito = Datos.estado.carrito[indice] || 0;
    if (enCarrito >= producto.stock) return resultadoError('Stock insuficiente: no quedan más unidades de ' + producto.nombre + '.');
    Datos.estado.carrito[indice] = enCarrito + 1;
    Datos.guardar();
    return resultadoOk('');
  },

  cambiarCantidadCarrito(indice, cambio) {
    const nueva = (Datos.estado.carrito[indice] || 0) + cambio;
    if (nueva > Datos.estado.productos[indice].stock) return resultadoError('Stock insuficiente.');
    if (nueva < 1) delete Datos.estado.carrito[indice];
    else Datos.estado.carrito[indice] = nueva;
    Datos.guardar();
    return resultadoOk('');
  },

  quitarDelCarrito(indice) {
    delete Datos.estado.carrito[indice];
    Datos.guardar();
  },

  cancelarVenta() {
    Datos.estado.carrito = {};
    Datos.guardar();
  },

  registrarVenta({ formaPago, montoRecibido, referencia }) {
    const estado = Datos.estado;
    const total = this.totalCarrito();
    const enEfectivo = formaPago === 'Efectivo';
    if (!estado.caja.abierta) return resultadoError('Abrí la caja antes de vender.');
    if (total === 0) return resultadoError('Agregá al menos un producto a la venta.');
    if (enEfectivo && montoRecibido < total) return resultadoError('El monto recibido no alcanza para cubrir el total.');
    if (!enEfectivo && !referencia.trim()) return resultadoError('Anotá el número de comprobante del pago.');

    const lineas = this.lineasCarrito();
    lineas.forEach((linea) => {
      linea.producto.stock -= linea.cantidad;
      linea.producto.vendidas += linea.cantidad;
    });
    const campoCaja = { Efectivo: 'efectivo', Tarjeta: 'tarjeta', Transferencia: 'transferencia' }[formaPago];
    estado.caja[campoCaja] += total;
    estado.caja.cantidadVentas += 1;
    estado.numeroVenta += 1;
    const venta = { id: estado.numeroVenta, total, formaPago, hora: horaActual() };
    estado.ventas.push(venta);
    estado.carrito = {};
    Datos.guardar();

    return resultadoOk('Venta registrada.', {
      comprobante: {
        ...venta,
        lineas: lineas.map((l) => ({ nombre: l.producto.nombre, cantidad: l.cantidad, subtotal: l.subtotal })),
        montoRecibido,
        vuelto: enEfectivo ? montoRecibido - total : 0,
      },
    });
  },

  /* ---------- Horneada (CU-05) ---------- */

  registrarHorneada(indice, cantidad, usuario) {
    if (!Number.isInteger(cantidad) || cantidad < 1) return resultadoError('La cantidad debe ser un número entero mayor a 0.');
    const producto = Datos.estado.productos[indice];
    producto.stock += cantidad;
    Datos.estado.horneadas.unshift({ producto: producto.nombre, cantidad, hora: horaActual(), usuario });
    Datos.guardar();
    return resultadoOk(`Horneada registrada: +${cantidad} ${producto.nombre} al stock.`);
  },

  /* ---------- Canasteros (CU-06 y CU-07) ---------- */

  /* cantidades: { indiceProducto: unidades } */
  registrarSalida(canastero, cantidades) {
    const items = {};
    Object.entries(cantidades).forEach(([indice, cantidad]) => { if (cantidad > 0) items[indice] = cantidad; });
    const indices = Object.keys(items);
    if (indices.length === 0) return resultadoError('Indicá al menos un producto para entregar.');
    const sinStock = indices.find((i) => items[i] > Datos.estado.productos[i].stock);
    if (sinStock) return resultadoError('No hay stock suficiente de ' + Datos.estado.productos[sinStock].nombre + '.');
    if (this.salidaPendienteDe(canastero)) return resultadoError(canastero + ' ya tiene una salida pendiente.');

    indices.forEach((i) => { Datos.estado.productos[i].stock -= items[i]; });
    Datos.estado.salidas.push({ id: Date.now(), canastero, items, estado: 'pendiente' });
    Datos.guardar();
    return resultadoOk('Salida de ' + canastero + ' registrada. El stock se descontó.');
  },

  verificarRendicion(salida, devueltas, recibido, observacion) {
    if (!Datos.estado.caja.abierta) return resultadoError('Abrí la caja para registrar la rendición.');
    const devolvioDeMas = Object.entries(salida.items).some(([i, entregadas]) => (devueltas[i] || 0) > entregadas);
    if (devolvioDeMas) return resultadoError('Lo devuelto no puede superar lo entregado.');
    if (recibido === null) return resultadoError('Ingresá el dinero que entregó el canastero.');
    const diferencia = recibido - this.montoARendir(salida, devueltas);
    if (diferencia !== 0 && !observacion.trim()) return resultadoError('Hay diferencia: escribí una observación.');
    return resultadoOk('');
  },

  registrarRendicion(idSalida, devueltas, recibido, observacion) {
    const salida = Datos.estado.salidas.find((s) => s.id === idSalida);
    const verificacion = this.verificarRendicion(salida, devueltas, recibido, observacion);
    if (!verificacion.ok) return verificacion;

    const monto = this.montoARendir(salida, devueltas);
    Object.keys(salida.items).forEach((i) => { Datos.estado.productos[i].stock += devueltas[i] || 0; });
    Datos.estado.caja.rendiciones += recibido;
    Object.assign(salida, { estado: 'liquidada', monto, recibido, diferencia: recibido - monto, observacion });
    Datos.guardar();
    return resultadoOk('Rendición registrada: ' + formatoGs(recibido) + ' ingresaron a la caja.');
  },

  /* ---------- Pedidos (CU-08) ---------- */

  agregarLineaPedido(indice, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad < 1) return resultadoError('La cantidad debe ser mayor a 0.');
    Datos.estado.borradorPedido.push({ indice, cantidad });
    Datos.guardar();
    return resultadoOk('');
  },

  quitarLineaPedido(posicion) {
    Datos.estado.borradorPedido.splice(posicion, 1);
    Datos.guardar();
  },

  registrarPedido({ cliente, telefono, fecha, sena }) {
    const total = this.totalBorradorPedido();
    if (!cliente.trim()) return resultadoError('Escribí el nombre del cliente.');
    if (!fecha || fecha < fechaHoy()) return resultadoError('Elegí una fecha de entrega desde hoy en adelante.');
    if (Datos.estado.borradorPedido.length === 0) return resultadoError('Agregá al menos un producto al pedido.');
    if (!(sena > 0) || sena > total) return resultadoError('La seña debe ser mayor a 0 y no superar el total.');

    const detalle = Datos.estado.borradorPedido
      .map((l) => l.cantidad + ' ' + Datos.estado.productos[l.indice].nombre).join(', ');
    Datos.estado.pedidos.push({ cliente, telefono, fecha, detalle, saldo: total - sena });
    Datos.estado.borradorPedido = [];
    Datos.guardar();
    return resultadoOk('Pedido confirmado y agendado.');
  },
};
