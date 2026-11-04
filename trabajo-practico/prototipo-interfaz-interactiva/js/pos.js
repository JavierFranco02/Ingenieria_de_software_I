/* Punto de Venta (CU-03 y CU-11). */

const usuario = Sesion.exigirAcceso('pos');

if (usuario) {
  Layout.montar('pos');
  conectarEventos();
  pintarTodo();
  document.addEventListener('caja-cambio', pintarTodo);
}

function conectarEventos() {
  $('#buscar').addEventListener('input', pintarProductos);
  $('#forma-pago').addEventListener('change', pintarPago);
  $('#monto-recibido').addEventListener('input', pintarPago);
  $('#btn-confirmar').addEventListener('click', confirmarVenta);
  $('#btn-cancelar').addEventListener('click', cancelarVenta);
  $('#btn-nueva-venta').addEventListener('click', () => $('#dlg-comprobante').close());
}

/* Con la caja cerrada solo se muestra el aviso (RN-01). */
function pintarTodo() {
  const abierta = Datos.estado.caja.abierta;
  mostrar($('#aviso-caja-cerrada'), !abierta);
  mostrar($('#panel-venta'), abierta);
  if (!abierta) return;
  pintarProductos();
  pintarCarrito();
  pintarUltimasVentas();
  pintarPago();
}

function pintarProductos() {
  const filtro = $('#buscar').value.toLowerCase();
  const tarjetas = [];
  Datos.estado.productos.forEach((producto, indice) => {
    if (!producto.nombre.toLowerCase().includes(filtro)) return;
    tarjetas.push(crearTarjetaProducto(producto, indice));
  });
  reemplazarHijos($('#productos'), tarjetas);
}

function crearTarjetaProducto(producto, indice) {
  const tarjeta = clonarPlantilla('tpl-producto');
  llenar(tarjeta, { stock: producto.stock, nombre: producto.nombre, precio: formatoGs(producto.precio) });
  tarjeta.classList.toggle('bajo', producto.stock > 0 && producto.stock < LIMITE_POCO_STOCK);
  tarjeta.classList.toggle('agot', producto.stock === 0);
  tarjeta.addEventListener('click', () => {
    avisarSiHayError(Reglas.agregarAlCarrito(indice));
    pintarCarrito();
  });
  return tarjeta;
}

function pintarCarrito() {
  const lineas = Reglas.lineasCarrito();
  mostrar($('#sin-lineas'), lineas.length === 0);
  reemplazarHijos($('#lineas'), lineas.map(crearLineaCarrito));
  $('#total').textContent = formatoGs(Reglas.totalCarrito());
  $('#btn-confirmar').disabled = lineas.length === 0;
  $('#btn-cancelar').disabled = lineas.length === 0;
  pintarPago();
}

function crearLineaCarrito(linea) {
  const fila = clonarPlantilla('tpl-linea');
  llenar(fila, { nombre: linea.producto.nombre, cantidad: linea.cantidad, subtotal: formatoGs(linea.subtotal) });
  $('[data-accion="mas"]', fila).addEventListener('click', () => cambiarCantidad(linea.indice, +1));
  $('[data-accion="menos"]', fila).addEventListener('click', () => cambiarCantidad(linea.indice, -1));
  $('[data-accion="quitar"]', fila).addEventListener('click', () => {
    Reglas.quitarDelCarrito(linea.indice);
    pintarCarrito();
  });
  return fila;
}

function cambiarCantidad(indice, cambio) {
  avisarSiHayError(Reglas.cambiarCantidadCarrito(indice, cambio));
  pintarCarrito();
}

/* Según la forma de pago se pide el monto recibido (efectivo) o el comprobante (tarjeta/transferencia). */
function pintarPago() {
  const enEfectivo = $('#forma-pago').value === 'Efectivo';
  mostrar($('#bloque-efectivo'), enEfectivo);
  mostrar($('#bloque-electronico'), !enEfectivo);
  const recibido = Number($('#monto-recibido').value) || 0;
  $('#vuelto').textContent = formatoGs(Math.max(0, recibido - Reglas.totalCarrito()));
}

function pintarUltimasVentas() {
  const ventas = Datos.estado.ventas.slice(-4).reverse();
  mostrar($('#sin-ventas'), ventas.length === 0);
  reemplazarHijos($('#ultimas-ventas'), ventas.map((venta) => {
    const item = clonarPlantilla('tpl-ultima-venta');
    llenar(item, { texto: `N.º ${venta.id} a las ${venta.hora}: ${formatoGs(venta.total)} (${venta.formaPago})` });
    return item;
  }));
}

function confirmarVenta() {
  const resultado = Reglas.registrarVenta({
    formaPago: $('#forma-pago').value,
    montoRecibido: Number($('#monto-recibido').value) || 0,
    referencia: $('#referencia').value,
  });
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  $('#monto-recibido').value = '';
  $('#referencia').value = '';
  pintarTodo();
  mostrarComprobante(resultado.comprobante);
}

function cancelarVenta() {
  Reglas.cancelarVenta();
  $('#monto-recibido').value = '';
  pintarCarrito();
  Layout.aviso('Venta cancelada. No se registró nada.', false);
}

function mostrarComprobante(comprobante) {
  $('#comprobante-titulo').textContent = `Venta N.º ${comprobante.id} registrada`;
  $('#comprobante-total').textContent = formatoGs(comprobante.total);
  $('#comprobante-pago').textContent = comprobante.formaPago === 'Efectivo'
    ? `Pago: Efectivo. Recibido ${formatoGs(comprobante.montoRecibido)}, vuelto ${formatoGs(comprobante.vuelto)}`
    : 'Pago: ' + comprobante.formaPago;
  reemplazarHijos($('#comprobante-lineas'), comprobante.lineas.map((linea) => {
    const fila = clonarPlantilla('tpl-linea-comprobante');
    llenar(fila, { detalle: `${linea.cantidad} × ${linea.nombre}`, importe: formatoGs(linea.subtotal) });
    return fila;
  }));
  $('#dlg-comprobante').showModal();
}

function avisarSiHayError(resultado) {
  if (!resultado.ok) Layout.aviso(resultado.mensaje, false);
}
