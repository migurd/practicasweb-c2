/* DECLARAR VARIABLES */

const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function() {
  // obtener los datos de los inputs
  let valorAuto = document.getElementById('valorAuto').value;
  let pInicial = document.getElementById('porcentaje').value;
  let plazos = document.getElementById('plazos').value;

  // hacer los cálculos
  let pagoInicial = valorAuto * (pInicial / 100);
  let totalFin = valorAuto-pagoInicial;
  let pagoMensual = totalFin / plazos;

  // mostrar los datos
  document.getElementById('pagoInicial').value = pagoInicial;
  document.getElementById('totalFin').value = totalFin;
  document.getElementById('pagoMensual').value = pagoMensual;

});

/* Se añadió el comentario para ver si netflify funciona :) */