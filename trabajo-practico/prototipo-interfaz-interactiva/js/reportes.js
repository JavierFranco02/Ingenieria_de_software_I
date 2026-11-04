/* Reportes de ingresos (CU-09). */

const usuario = Sesion.exigirAcceso('reportes');
let modoGrafico = 'dia';

if (usuario) {
  Layout.montar('reportes');
  $$('[data-modo]').forEach((boton) => {
    boton.addEventListener('click', () => {
      modoGrafico = boton.dataset.modo;
      pintarGrafico();
    });
  });
  pintarIndicadores();
  pintarGrafico();
  pintarRanking();
  pintarOrigen();
}

function pintarIndicadores() {
  const ventas = Datos.estado.ventas;
  llenar(document.body, {
    ingresosHoy: formatoGs(Reglas.totalIngresos()),
    semana: formatoGs(Reglas.ingresosSemanaEnCurso()),
    ticket: formatoGs(ventas.length > 0 ? Reglas.totalVentas() / ventas.length : 0),
  });
}

/* Barras de ingresos por día o por semana; la última (la actual) va resaltada. */
function pintarGrafico() {
  const porDia = modoGrafico === 'dia';
  const datos = porDia ? Reglas.ingresosPorDia() : Reglas.ingresosPorSemana();
  const maximo = Math.max(...datos.map((d) => d[1]), 1);
  $('#titulo-grafico').textContent = 'Ingresos ' + (porDia ? 'diarios' : 'semanales');
  $$('[data-modo]').forEach((boton) => boton.classList.toggle('on', boton.dataset.modo === modoGrafico));
  reemplazarHijos($('#grafico'), datos.map(([nombre, valor], posicion) => {
    const barra = clonarPlantilla('tpl-barra');
    llenar(barra, { nombre: nombre, valor: Math.round(valor / 1000) + 'k' });
    $('i', barra).style.height = (valor / maximo) * 85 + '%';
    barra.classList.toggle('hoy', posicion === datos.length - 1);
    return barra;
  }));
}

function pintarRanking() {
  const productos = [...Datos.estado.productos].sort((a, b) => b.vendidas - a.vendidas);
  const maximo = Math.max(...productos.map((p) => p.vendidas), 1);
  reemplazarHijos($('#ranking'), productos.map((producto) => {
    const fila = clonarPlantilla('tpl-ranking');
    llenar(fila, { nombre: producto.nombre, vendidas: producto.vendidas });
    $('i', fila).style.width = Math.max(3, (producto.vendidas / maximo) * 100) + '%';
    return fila;
  }));
}

function pintarOrigen() {
  const ventasDe = (formaPago) => sumar(Datos.estado.ventas.filter((v) => v.formaPago === formaPago).map((v) => v.total));
  llenar($('#origen'), {
    efectivo: formatoGs(ventasDe('Efectivo')),
    tarjeta: formatoGs(ventasDe('Tarjeta')),
    transferencia: formatoGs(ventasDe('Transferencia')),
    canasteros: formatoGs(Reglas.totalRendiciones()),
  });
}
