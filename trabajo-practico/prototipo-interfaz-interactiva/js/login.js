/* Pantalla de inicio de sesión (CU-01). */

Tema.iniciar();

$('#form-login').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const correcto = Sesion.iniciar($('#usuario').value, $('#clave').value);
  if (correcto) {
    location.href = 'inicio.html';
  } else {
    mostrar($('#error-login'), true);
  }
});

/* El ojito alterna entre mostrar y ocultar la contraseña. */
$('#ver-clave').addEventListener('click', () => {
  const visible = $('#clave').type === 'text';
  $('#clave').type = visible ? 'password' : 'text';
  mostrar($('#ojo-abierto'), visible);
  mostrar($('#ojo-cerrado'), !visible);
  const texto = visible ? 'Mostrar contraseña' : 'Ocultar contraseña';
  $('#ver-clave').title = texto;
  $('#ver-clave').setAttribute('aria-label', texto);
});
