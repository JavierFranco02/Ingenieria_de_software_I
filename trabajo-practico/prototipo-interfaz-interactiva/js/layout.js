/* Partes comunes de todas las pantallas: menú lateral, barra superior, aviso y diálogo de abrir caja.
   Layout.montar() las genera e inserta en #sidebar y #topbar. */

const MENU = {
  inicio: { texto: 'Inicio', icono: 'M3 11l9-8 9 8M5 10v10h14V10' },
  pos: { texto: 'Punto de Venta', icono: 'M3 4h3l2 11h10l2-8H7M10 20h.01M17 20h.01' },
  canasteros: { texto: 'Canasteros', icono: 'M12 12a4 4 0 100-8 4 4 0 000 8M4 21c0-4 4-6 8-6s8 2 8 6' },
  pedidos: { texto: 'Pedidos', icono: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4' },
  cierre: { texto: 'Cierre de caja', icono: 'M6 11h12v10H6zM8 11V7a4 4 0 018 0v4' },
  horneada: { texto: 'Horneada', icono: 'M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-3 2-4 2-6 1 1 2 1 3-4z' },
  reportes: { texto: 'Reportes', icono: 'M5 21V10M12 21V4M19 21v-8' },
};

const ICONO_SALIR = '<svg viewBox="0 0 24 24"><path d="M9 21H5V3h4M16 17l5-5-5-5M21 12H9"/></svg>';
let temporizadorAviso = null;

const Layout = {
  montar(pagina) {
    const usuario = Sesion.usuarioActual();
    $('#sidebar').innerHTML = this.htmlSidebar(usuario, pagina);
    $('#topbar').innerHTML = this.htmlTopbar(usuario);
    $('#btn-cerrar-sesion').addEventListener('click', () => {
      Sesion.cerrar();
      location.href = 'login.html';
    });
    $('#btn-reiniciar').addEventListener('click', () => {
      Datos.reiniciar();
      location.reload();
    });
    if (usuario.rol === 'Cajero') {
      this.crearDialogoAbrirCaja();
      this.actualizarCaja();
    }
    this.enlazarBotonesAbrirCaja();
    Tema.iniciar();
  },

  htmlSidebar(usuario, pagina) {
    const enlaces = PAGINAS_POR_ROL[usuario.rol].map((id) => `
      <a href="${id}.html" class="${id === pagina ? 'on' : ''}">
        <svg viewBox="0 0 24 24"><path d="${MENU[id].icono}"/></svg>${MENU[id].texto}
      </a>`).join('');
    return `
      <div class="marca"><span class="logo"></span><div>ChipeSoft<small>Chiperia la Caraguateña</small></div></div>
      <nav>${enlaces}</nav>
      <div class="user">
        <b>${usuario.nombre}</b><span>${usuario.rol}</span>
        <button type="button" class="logout" id="btn-cerrar-sesion">${ICONO_SALIR}Cerrar sesión</button>
        <button type="button" class="lnk" id="btn-reiniciar">Reiniciar datos de demostración</button>
      </div>`;
  },

  htmlTopbar(usuario) {
    const estadoCaja = usuario.rol === 'Cajero' ? '<div class="chipcaja" id="chip-caja"></div>' : '';
    return estadoCaja + '<button type="button" class="tbtn" data-tema-boton></button>';
  },

  /* Repinta el estado de la caja en la barra superior (solo para el Cajero). */
  actualizarCaja() {
    const chip = $('#chip-caja');
    if (!chip) return;
    const caja = Datos.estado.caja;
    chip.className = 'chipcaja ' + (caja.abierta ? 'ab' : 'ce');
    chip.innerHTML = `<span class="dot"></span>
      <span>${caja.abierta ? 'Caja abierta, inicial ' + formatoGs(caja.montoInicial) : 'Caja cerrada'}</span>
      ${caja.abierta
        ? '<a class="btn chico sec" href="cierre.html">Cerrar caja</a>'
        : '<button type="button" class="btn chico" data-abrir-caja>Abrir caja</button>'}`;
    this.enlazarBotonesAbrirCaja();
  },

  /* Avisa a la pantalla y a la barra que la caja cambió (se abrió o se cerró). */
  cajaCambio() {
    this.actualizarCaja();
    document.dispatchEvent(new Event('caja-cambio'));
  },

  /* Cualquier botón con data-abrir-caja abre el mismo diálogo. */
  enlazarBotonesAbrirCaja() {
    $$('[data-abrir-caja]').forEach((boton) => {
      if (boton.dataset.enlazado) return;
      boton.dataset.enlazado = 'si';
      boton.addEventListener('click', () => this.pedirAbrirCaja());
    });
  },

  crearDialogoAbrirCaja() {
    document.body.insertAdjacentHTML('beforeend', `
      <dialog class="modal" id="dlg-abrir-caja">
        <h2>Abrir caja</h2>
        <p>Ingresá el efectivo con el que arranca el turno.</p>
        <label>Monto inicial en efectivo (Gs)
          <input id="monto-inicial" type="number" min="0" placeholder="100000">
        </label>
        <div class="mbtn">
          <button type="button" class="btn sec" id="abrir-cancelar">Cancelar</button>
          <button type="button" class="btn" id="abrir-confirmar">Abrir caja</button>
        </div>
      </dialog>`);
    $('#abrir-cancelar').addEventListener('click', () => $('#dlg-abrir-caja').close());
    $('#abrir-confirmar').addEventListener('click', () => this.confirmarAbrirCaja());
  },

  pedirAbrirCaja() {
    if (Datos.estado.caja.abierta) return this.aviso('Ya hay una caja abierta.', false);
    $('#monto-inicial').value = '';
    $('#dlg-abrir-caja').showModal();
  },

  confirmarAbrirCaja() {
    const monto = leerNumero($('#monto-inicial'));
    const resultado = Reglas.abrirCaja(monto === null ? NaN : monto);
    if (!resultado.ok) return this.aviso(resultado.mensaje, false);
    $('#dlg-abrir-caja').close();
    this.aviso(resultado.mensaje);
    this.cajaCambio();
  },

  /* Mensaje flotante que desaparece solo. */
  aviso(texto, correcto = true) {
    let aviso = $('#aviso');
    if (!aviso) {
      aviso = document.createElement('div');
      aviso.id = 'aviso';
      document.body.append(aviso);
    }
    aviso.textContent = texto;
    aviso.className = 'toast ' + (correcto ? 'ok' : 'err');
    aviso.hidden = false;
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => { aviso.hidden = true; }, 3500);
  },

  mostrarSinPermiso() {
    const principal = $('main');
    [...principal.children].forEach((hijo) => { if (!hijo.classList.contains('topbar')) hijo.remove(); });
    principal.insertAdjacentHTML('beforeend',
      '<div class="banda err">Tu rol no tiene permiso para ver esta pantalla.</div><a class="btn chico" href="inicio.html">Volver al inicio</a>');
  },
};
