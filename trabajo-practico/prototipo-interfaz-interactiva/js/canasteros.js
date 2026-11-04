/* Canasteros: lista con estados, y diálogos de salida (CU-06) y de devolución y rendición (CU-07). */

const usuario = Sesion.exigirAcceso('canasteros');
let canasteroEnDialogo = null;   // nombre del canastero cuya salida se está registrando
let salidaEnDialogo = null;      // salida pendiente que se está rindiendo

if (usuario) {
  Layout.montar('canasteros');
  conectarEventos();
  pintarTodo();
  document.addEventListener('caja-cambio', pintarTodo);
}

function conectarEventos() {
  $('#salida-cancelar').addEventListener('click', () => $('#dlg-salida').close());
  $('#salida-confirmar').addEventListener('click', confirmarSalida);
  $('#rendicion-cancelar').addEventListener('click', () => $('#dlg-rendicion').close());
  $('#rendicion-confirmar').addEventListener('click', confirmarRendicion);
  $('#rendicion-recibido').addEventListener('input', pintarCalculoRendicion);
  $('#rendicion-observacion').addEventListener('input', pintarCalculoRendicion);
}

function pintarTodo() {
  const hayPendientes = Reglas.salidasPendientes().length > 0;
  mostrar($('#aviso-caja'), !Datos.estado.caja.abierta && hayPendientes);
  reemplazarHijos($('#tabla-canasteros'), Datos.estado.canasteros.map(crearFilaCanastero));
  pintarRendiciones();
}

function crearFilaCanastero(nombre) {
  const fila = clonarPlantilla('tpl-canastero');
  const estado = Reglas.estadoCanastero(nombre);
  const salida = Reglas.salidaPendienteDe(nombre);
  llenar(fila, {
    nombre: nombre,
    estado: estado,
    llevo: salida ? descripcionItems(salida.items) : '—',
  });
  $('.badge', fila).classList.toggle('v', estado === 'Liquidado');
  $('.badge', fila).classList.toggle('cal', estado === 'En la calle');

  const boton = $('button', fila);
  if (salida) {
    boton.textContent = 'Devolución y rendición';
    boton.classList.add('sec');
    boton.disabled = !Datos.estado.caja.abierta;
    boton.title = boton.disabled ? 'Abrí la caja para registrar la rendición' : '';
    boton.addEventListener('click', () => abrirRendicion(salida));
  } else {
    boton.textContent = 'Registrar salida';
    boton.addEventListener('click', () => abrirSalida(nombre));
  }
  return fila;
}

function descripcionItems(items) {
  return Object.entries(items)
    .map(([indice, cantidad]) => `${cantidad} ${Datos.estado.productos[indice].nombre}`)
    .join(', ');
}

function pintarRendiciones() {
  const liquidadas = Reglas.salidasLiquidadas();
  mostrar($('#sin-rendiciones'), liquidadas.length === 0);
  reemplazarHijos($('#lista-rendiciones'), liquidadas.map((salida) => {
    const item = clonarPlantilla('tpl-rendicion');
    llenar(item, { nombre: salida.canastero, recibido: formatoGs(salida.recibido), monto: formatoGs(salida.monto) });
    pintarDiferencia($('[data-campo="diferencia"]', item), salida.diferencia);
    return item;
  }));
}

/* ---------- Diálogo de salida ---------- */

function abrirSalida(nombre) {
  canasteroEnDialogo = nombre;
  $('#salida-titulo').textContent = 'Salida de ' + nombre;
  reemplazarHijos($('#salida-productos'), Datos.estado.productos.map((producto, indice) => {
    const fila = clonarPlantilla('tpl-fila-salida');
    fila.dataset.indice = indice;
    llenar(fila, { producto: producto.nombre, stock: producto.stock });
    return fila;
  }));
  $('#dlg-salida').showModal();
}

function confirmarSalida() {
  const resultado = Reglas.registrarSalida(canasteroEnDialogo, leerCantidades('#salida-productos'));
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  $('#dlg-salida').close();
  Layout.aviso(resultado.mensaje);
  pintarTodo();
}

/* ---------- Diálogo de rendición ---------- */

function abrirRendicion(salida) {
  salidaEnDialogo = salida;
  $('#rendicion-titulo').textContent = 'Rendición de ' + salida.canastero;
  reemplazarHijos($('#rendicion-productos'), Object.entries(salida.items).map(([indice, entregadas]) => {
    const fila = clonarPlantilla('tpl-fila-devolucion');
    fila.dataset.indice = indice;
    llenar(fila, { producto: Datos.estado.productos[indice].nombre, entregadas: entregadas });
    $('input', fila).addEventListener('input', pintarCalculoRendicion);
    return fila;
  }));
  $('#rendicion-recibido').value = '';
  $('#rendicion-observacion').value = '';
  pintarCalculoRendicion();
  $('#dlg-rendicion').showModal();
}

function pintarCalculoRendicion() {
  const monto = Reglas.montoARendir(salidaEnDialogo, leerCantidades('#rendicion-productos'));
  const recibido = leerNumero($('#rendicion-recibido'));
  $('#rendicion-monto').textContent = formatoGs(monto);
  pintarDiferencia($('#rendicion-diferencia'), recibido === null ? null : recibido - monto, 'ingresá el dinero recibido');
  mostrar($('#rendicion-obs-bloque'), recibido !== null && recibido - monto !== 0);
}

function confirmarRendicion() {
  const resultado = Reglas.registrarRendicion(
    salidaEnDialogo.id,
    leerCantidades('#rendicion-productos'),
    leerNumero($('#rendicion-recibido')),
    $('#rendicion-observacion').value,
  );
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  $('#dlg-rendicion').close();
  Layout.aviso(resultado.mensaje);
  pintarTodo();
}

/* Lee los campos numéricos de una tabla: { indiceProducto: cantidad }. */
function leerCantidades(selectorTabla) {
  const cantidades = {};
  $$('tr', $(selectorTabla)).forEach((fila) => {
    cantidades[fila.dataset.indice] = Number($('input', fila).value) || 0;
  });
  return cantidades;
}
