/* Cierre de caja con arqueo (CU-04). */

const usuario = Sesion.exigirAcceso('cierre');

if (usuario) {
  Layout.montar('cierre');
  conectarEventos();
  pintar();
  document.addEventListener('caja-cambio', pintar);
}

function conectarEventos() {
  $('#contado').addEventListener('input', pintarDiferenciaArqueo);
  $('#observacion').addEventListener('input', pintarDiferenciaArqueo);
  $('#btn-cerrar').addEventListener('click', pedirConfirmacion);
  $('#cierre-volver').addEventListener('click', () => $('#dlg-cierre').close());
  $('#cierre-confirmar').addEventListener('click', cerrarCaja);
}

function pintar() {
  const abierta = Datos.estado.caja.abierta;
  mostrar($('#panel-arqueo'), abierta);
  mostrar($('#sin-caja'), !abierta);
  if (abierta) pintarArqueo();
  else pintarResumenCierre();
}

function pintarArqueo() {
  const caja = Datos.estado.caja;
  llenar($('#panel-arqueo'), {
    montoInicial: formatoGs(caja.montoInicial),
    ventasEfectivo: formatoGs(caja.efectivo),
    rendiciones: formatoGs(caja.rendiciones),
    esperado: formatoGs(Reglas.efectivoEsperado()),
  });
  llenar($('#movimientos'), {
    efectivo: formatoGs(caja.efectivo),
    tarjeta: formatoGs(caja.tarjeta),
    transferencia: formatoGs(caja.transferencia),
    rendicionesMov: formatoGs(caja.rendiciones),
    cantidadVentas: caja.cantidadVentas,
  });
  $('#contado').value = '';
  $('#observacion').value = '';
  pintarDiferenciaArqueo();
}

/* Diferencia entre lo contado y lo esperado; si no es cero se pide una observación (RN-09). */
function pintarDiferenciaArqueo() {
  const contado = leerNumero($('#contado'));
  const diferencia = contado === null ? null : contado - Reglas.efectivoEsperado();
  pintarDiferencia($('#diferencia'), diferencia, 'contá el efectivo');
  mostrar($('#observacion-bloque'), diferencia !== null && diferencia !== 0);
}

function pedirConfirmacion() {
  const verificacion = Reglas.verificarCierre(leerNumero($('#contado')), $('#observacion').value);
  if (!verificacion.ok) return Layout.aviso(verificacion.mensaje, false);
  $('#dlg-cierre').showModal();
}

function cerrarCaja() {
  const resultado = Reglas.cerrarCaja(leerNumero($('#contado')), $('#observacion').value);
  $('#dlg-cierre').close();
  if (!resultado.ok) return Layout.aviso(resultado.mensaje, false);
  Layout.aviso(resultado.mensaje);
  Layout.cajaCambio();
}

/* Con la caja cerrada se muestra el resumen del último arqueo, si existe. */
function pintarResumenCierre() {
  const cierre = Datos.estado.caja.cierre;
  mostrar($('#resumen-cierre'), cierre !== null);
  if (!cierre) return;
  llenar($('#resumen-cierre'), {
    esperado: formatoGs(cierre.esperado),
    contado: formatoGs(cierre.contado),
    observacion: cierre.observacion,
  });
  pintarDiferencia($('[data-campo="diferencia"]', $('#resumen-cierre')), cierre.diferencia);
  mostrar($('#cierre-observacion'), cierre.observacion !== '');
}
