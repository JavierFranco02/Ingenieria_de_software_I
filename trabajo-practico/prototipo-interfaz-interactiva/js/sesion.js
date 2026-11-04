/* Sesión: usuarios de prueba, roles y qué pantallas puede ver cada rol (RF-01). */

const USUARIOS = {
  cajero: { clave: 'caja123', rol: 'Cajero', nombre: 'Usuario-cajero' },
  maestro: { clave: 'horno123', rol: 'Maestro Chipero', nombre: 'Usuario-chipero' },
  dueno: { clave: 'dueno123', rol: 'Dueño', nombre: 'Usuario-dueño' },
};

const PAGINAS_POR_ROL = {
  'Cajero': ['inicio', 'pos', 'canasteros', 'pedidos', 'cierre'],
  'Maestro Chipero': ['inicio', 'horneada'],
  'Dueño': ['inicio', 'reportes'],
};

const Sesion = {
  usuarioActual() {
    const usuario = sessionStorage.getItem('usuario');
    return USUARIOS[usuario] ? { id: usuario, ...USUARIOS[usuario] } : null;
  },

  /* Devuelve true si las credenciales son correctas y deja la sesión iniciada. */
  iniciar(usuario, clave) {
    const cuenta = USUARIOS[usuario.trim().toLowerCase()];
    if (!cuenta || cuenta.clave !== clave) return false;
    sessionStorage.setItem('usuario', usuario.trim().toLowerCase());
    return true;
  },

  cerrar() {
    sessionStorage.removeItem('usuario');
  },

  /* Cada pantalla la llama primero: sin sesión vuelve al login; sin permiso muestra un aviso. */
  exigirAcceso(pagina) {
    const usuario = this.usuarioActual();
    if (!usuario) {
      location.href = 'login.html';
      return null;
    }
    if (!PAGINAS_POR_ROL[usuario.rol].includes(pagina)) {
      Layout.montar(pagina);
      Layout.mostrarSinPermiso();
      return null;
    }
    return usuario;
  },
};
