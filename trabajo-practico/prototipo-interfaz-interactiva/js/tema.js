/* Tema claro u oscuro. Se aplica apenas carga el script para evitar parpadeos. */

const ICONO_SOL = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICONO_LUNA = '<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';

const Tema = {
  actual() {
    const guardado = localStorage.getItem('tema');
    if (guardado) return guardado;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  aplicar() {
    document.documentElement.dataset.tema = this.actual();
  },

  alternar() {
    localStorage.setItem('tema', this.actual() === 'dark' ? 'light' : 'dark');
    this.aplicar();
    this.pintarBotones();
  },

  /* Pone el ícono correcto en cada botón marcado con data-tema-boton. */
  pintarBotones() {
    const oscuro = this.actual() === 'dark';
    document.querySelectorAll('[data-tema-boton]').forEach((boton) => {
      const texto = 'Cambiar a modo ' + (oscuro ? 'claro' : 'oscuro');
      boton.innerHTML = oscuro ? ICONO_SOL : ICONO_LUNA;
      boton.title = texto;
      boton.setAttribute('aria-label', texto);
    });
  },

  iniciar() {
    this.pintarBotones();
    document.querySelectorAll('[data-tema-boton]').forEach((boton) => {
      boton.onclick = () => this.alternar();
    });
  },
};

Tema.aplicar();
