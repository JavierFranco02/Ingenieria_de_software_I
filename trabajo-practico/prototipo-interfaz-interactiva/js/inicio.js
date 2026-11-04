/* Pantalla de inicio: muestra el resumen que corresponde al rol del usuario. */

const usuario = Sesion.exigirAcceso('inicio');

if (usuario) {
  Layout.montar('inicio');
  pintarInicio();
  document.addEventListener('caja-cambio', pintarInicio);
}

function pintarInicio() {
  $('#saludo').textContent = 'Buen día, ' + usuario.nombre.split(' ')[0];
  $('#subtitulo').textContent = {
    'Cajero': 'Esto es lo que pasa hoy en la chipería.',
    'Maestro Chipero': 'Resumen de la producción de hoy.',
    'Dueño': 'Resumen de ingresos.',
  }[usuario.rol];

  mostrar($('#resumen-cajero'), usuario.rol === 'Cajero');
  mostrar($('#resumen-maestro'), usuario.rol === 'Maestro Chipero');
  mostrar($('#resumen-dueno'), usuario.rol === 'Dueño');

  if (usuario.rol === 'Cajero') pintarResumenCajero();
  if (usuario.rol === 'Maestro Chipero') pintarResumenMaestro();
  if (usuario.rol === 'Dueño') pintarResumenDueno();
}

function pintarResumenCajero() {
  const caja = Datos.estado.caja;
  const enCalle = Reglas.salidasPendientes().length;
  llenar($('#resumen-cajero'), {
    estadoCaja: caja.abierta ? 'Abierta' : 'Cerrada',
    detalleCaja: caja.abierta ? 'Monto inicial ' + formatoGs(caja.montoInicial) : 'Abrila para empezar a vender',
    vendido: formatoGs(Reglas.totalVentas()),
    cantidadVentas: Datos.estado.ventas.length + ' ventas',
    enCalle: enCalle,
    detalleCalle: enCalle > 0 ? 'pendientes de rendir' : 'todos rindieron',
  });

  const pocoStock = Reglas.productosConPocoStock();
  mostrar($('#aviso-stock'), pocoStock.length > 0);
  $('#lista-stock').textContent = pocoStock.map((p) => `${p.nombre} (${p.stock})`).join(', ');

  mostrar($('#btn-vender'), caja.abierta);
  mostrar($('#btn-abrir-caja'), !caja.abierta);
}

function pintarResumenMaestro() {
  const produccion = Reglas.resumenProduccion();
  llenar($('#resumen-maestro'), {
    horneadas: produccion.cantidad,
    unidades: produccion.unidades,
    ultimaHora: produccion.ultima ? produccion.ultima.hora : '—',
    ultimaDetalle: produccion.ultima ? `${produccion.ultima.cantidad} de ${produccion.ultima.producto}` : 'Todavía no hay',
  });

  const pocoStock = Reglas.productosConPocoStock().sort((a, b) => a.stock - b.stock);
  mostrar($('#tarjeta-hornear'), pocoStock.length > 0);
  mostrar($('#stock-suficiente'), pocoStock.length === 0);
  reemplazarHijos($('#lista-hornear'), pocoStock.map((producto) => {
    const fila = clonarPlantilla('tpl-fila-hornear');
    llenar(fila, { producto: producto.nombre, detalle: 'quedan ' + producto.stock });
    return fila;
  }));
}

function pintarResumenDueno() {
  llenar($('#resumen-dueno'), {
    ingresosHoy: formatoGs(Reglas.totalIngresos()),
    semana: formatoGs(Reglas.ingresosSemanaEnCurso()),
    pedidos: Datos.estado.pedidos.length,
  });
}
