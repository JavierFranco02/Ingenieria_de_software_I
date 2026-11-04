/* Estado de la aplicación: datos iniciales y guardado en el navegador (localStorage). */

const CLAVE_ALMACEN = 'chipesoft-v5';

function crearDatosIniciales() {
  return {
    caja: { abierta: false, montoInicial: 0, efectivo: 0, tarjeta: 0, transferencia: 0, rendiciones: 0, cantidadVentas: 0, cierre: null },
    productos: [
      { nombre: 'Chipa almidón', precio: 2500, stock: 40, vendidas: 120 },
      { nombre: 'Chipa cuerito', precio: 3000, stock: 30, vendidas: 95 },
      { nombre: "Chipa so'o", precio: 5000, stock: 20, vendidas: 60 },
      { nombre: 'Chipa guasu', precio: 6000, stock: 12, vendidas: 40 },
      { nombre: 'Mbejú', precio: 4000, stock: 25, vendidas: 50 },
    ],
    carrito: {},                 // índice de producto -> cantidad
    ventas: [],
    numeroVenta: 0,
    horneadas: [
      { producto: "Chipa so'o", cantidad: 30, hora: '09:40', usuario: 'Tito Giménez' },
      { producto: 'Chipa almidón', cantidad: 60, hora: '07:10', usuario: 'Tito Giménez' },
    ],
    canasteros: ['Don Aníbal', 'Doña Perla', 'Ña Blanca'],
    salidas: [
      { id: 1, canastero: 'Don Aníbal', items: { 0: 30, 1: 20, 2: 10 }, estado: 'pendiente' },
      { id: 2, canastero: 'Doña Perla', items: { 0: 20, 1: 15, 3: 8 }, estado: 'pendiente' },
    ],
    borradorPedido: [],          // líneas del pedido que se está armando: { indice, cantidad }
    pedidos: [],
    ingresosPorDia: [['Lun', 410000], ['Mar', 380000], ['Mié', 455000], ['Jue', 398000], ['Vie', 520000], ['Sáb', 610000]],
    ingresosPorSemana: [['Hace 4 sem.', 2450000], ['Hace 3 sem.', 2710000], ['Hace 2 sem.', 2580000], ['Sem. pasada', 2890000]],
  };
}

function cargarEstado() {
  const guardado = localStorage.getItem(CLAVE_ALMACEN);
  return guardado ? JSON.parse(guardado) : crearDatosIniciales();
}

const Datos = {
  estado: cargarEstado(),

  guardar() {
    localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(this.estado));
  },

  reiniciar() {
    this.estado = crearDatosIniciales();
    this.guardar();
  },
};
