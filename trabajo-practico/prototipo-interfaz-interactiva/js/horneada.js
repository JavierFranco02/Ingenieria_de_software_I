/* Registro de horneadas (CU-05) y stock actual. */

const usuario = Sesion.exigirAcceso('horneada');

if (usuario) {
  Layout.montar('horneada');
  reemplazarHijos($('#producto'), Datos.estado.productos.map((p, indice) => new Option(p.nombre, indice)));
  $('#btn-registrar').addEventListener('click', registrarHorneada);
  pintarHistorial();
  pintarStock();
}

function registrarHorneada() {
  const resultado = Reglas.registrarHorneada(
    Number($('#producto').value),
    Number($('#cantidad').value),
    usuario.nombre,
  );
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  Layout.aviso(resultado.mensaje);
  pintarHistorial();
  pintarStock();
}

function pintarHistorial() {
  const horneadas = Datos.estado.horneadas;
  mostrar($('#sin-horneadas'), horneadas.length === 0);
  reemplazarHijos($('#historial'), horneadas.map((horneada) => {
    const fila = clonarPlantilla('tpl-horneada');
    llenar(fila, horneada);
    return fila;
  }));
}

/* Barras con el stock de cada producto; en rojo los de poco stock. */
function pintarStock() {
  const productos = Datos.estado.productos;
  const maximo = Math.max(...productos.map((p) => p.stock), 1);
  reemplazarHijos($('#stock'), productos.map((producto) => {
    const fila = clonarPlantilla('tpl-stock');
    llenar(fila, { nombre: producto.nombre, stock: producto.stock });
    $('i', fila).style.width = Math.max(3, (producto.stock / maximo) * 100) + '%';
    fila.classList.toggle('r', producto.stock < LIMITE_POCO_STOCK);
    return fila;
  }));
  const pocoStock = Reglas.productosConPocoStock();
  mostrar($('#aviso-stock'), pocoStock.length > 0);
  $('#texto-stock').textContent = `Poco stock en ${pocoStock.length} producto(s): conviene hornear.`;
}
