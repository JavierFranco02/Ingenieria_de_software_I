/* Pedidos para eventos con seña (CU-08). */

const usuario = Sesion.exigirAcceso('pedidos');
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

if (usuario) {
  Layout.montar('pedidos');
  prepararFormulario();
  pintarBorrador();
  pintarAgenda();
}

function prepararFormulario() {
  $('#fecha').min = fechaHoy();
  reemplazarHijos($('#producto'), Datos.estado.productos.map((p, indice) => new Option(p.nombre, indice)));
  $('#btn-agregar').addEventListener('click', agregarLinea);
  $('#btn-confirmar').addEventListener('click', confirmarPedido);
  $('#sena').addEventListener('input', pintarResumen);
}

function agregarLinea() {
  const resultado = Reglas.agregarLineaPedido(Number($('#producto').value), Number($('#cantidad').value));
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  pintarBorrador();
}

/* Líneas del pedido que se está armando, con su total y saldo. */
function pintarBorrador() {
  const lineas = Datos.estado.borradorPedido;
  mostrar($('#sin-lineas'), lineas.length === 0);
  reemplazarHijos($('#lineas-pedido'), lineas.map((linea, posicion) => {
    const producto = Datos.estado.productos[linea.indice];
    const fila = clonarPlantilla('tpl-linea-pedido');
    llenar(fila, { detalle: `${linea.cantidad} × ${producto.nombre}`, importe: formatoGs(producto.precio * linea.cantidad) });
    $('button', fila).addEventListener('click', () => {
      Reglas.quitarLineaPedido(posicion);
      pintarBorrador();
    });
    return fila;
  }));
  pintarResumen();
}

function pintarResumen() {
  const total = Reglas.totalBorradorPedido();
  $('#total').textContent = formatoGs(total);
  $('#saldo').textContent = formatoGs(total - (Number($('#sena').value) || 0));
}

function confirmarPedido() {
  const resultado = Reglas.registrarPedido({
    cliente: $('#cliente').value,
    telefono: $('#telefono').value,
    fecha: $('#fecha').value,
    sena: Number($('#sena').value),
  });
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  ['cliente', 'telefono', 'fecha', 'sena'].forEach((id) => { $('#' + id).value = ''; });
  Layout.aviso(resultado.mensaje);
  pintarBorrador();
  pintarAgenda();
}

function pintarAgenda() {
  const pedidos = [...Datos.estado.pedidos].sort((a, b) => (a.fecha < b.fecha ? -1 : 1));
  mostrar($('#sin-pedidos'), pedidos.length === 0);
  reemplazarHijos($('#agenda'), pedidos.map((pedido) => {
    const [, mes, dia] = pedido.fecha.split('-');
    const tarjeta = clonarPlantilla('tpl-pedido');
    llenar(tarjeta, {
      dia: Number(dia), mes: MESES[mes - 1],
      cliente: pedido.cliente, detalle: pedido.detalle, saldo: formatoGs(pedido.saldo),
    });
    return tarjeta;
  }));
}
