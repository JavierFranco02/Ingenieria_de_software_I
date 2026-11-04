/* Utilidades compartidas: seleccionar elementos, dar formato y trabajar con plantillas (<template>). */

const $ = (selector, raiz = document) => raiz.querySelector(selector);
const $$ = (selector, raiz = document) => [...raiz.querySelectorAll(selector)];

function formatoGs(monto) {
  return 'Gs ' + Math.round(monto).toLocaleString('es-PY');
}

/* Fecha local en formato AAAA-MM-DD (toISOString usaría la hora UTC y adelantaría el día por la noche). */
function fechaHoy() {
  const ahora = new Date();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');
  return `${ahora.getFullYear()}-${mes}-${dia}`;
}

function horaActual() {
  return new Date().toLocaleTimeString('es-PY', { hour: '2-digit', minute: '2-digit' });
}

function sumar(numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

/* Lee un campo numérico. Devuelve null si está vacío, para distinguirlo del 0. */
function leerNumero(input) {
  return input.value === '' ? null : Number(input.value);
}

/* Copia una <template> del HTML y devuelve el elemento listo para rellenar. */
function clonarPlantilla(id) {
  return $('#' + id).content.firstElementChild.cloneNode(true);
}

/* Escribe valores en los elementos hijos marcados con data-campo="nombre". */
function llenar(elemento, valores) {
  for (const [campo, valor] of Object.entries(valores)) {
    const selector = `[data-campo="${campo}"]`;
    const destino = elemento.matches(selector) ? elemento : $(selector, elemento);
    if (destino) destino.textContent = valor;
  }
}

function reemplazarHijos(contenedor, elementos) {
  contenedor.replaceChildren(...elementos);
}

function mostrar(elemento, visible) {
  elemento.hidden = !visible;
}

/* Muestra una diferencia de dinero con color: verde si es cero, rojo si es negativa. */
function pintarDiferencia(elemento, diferencia, textoVacio = '') {
  elemento.classList.remove('neg', 'cero');
  if (diferencia === null) {
    elemento.textContent = textoVacio;
    return;
  }
  elemento.textContent = formatoGs(diferencia);
  if (diferencia === 0) elemento.classList.add('cero');
  if (diferencia < 0) elemento.classList.add('neg');
}
