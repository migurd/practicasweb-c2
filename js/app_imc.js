// botón
const btnCalcular = document.getElementById('btnCalcular');

// listener
btnCalcular.addEventListener('click', function() {

  // save values
  let peso = document.getElementById('peso');
  let altura = document.getElementById('altura');
  let imc = document.getElementById('imc');

  // math momento
  let imc_value = (peso.value) / Math.pow(altura.value, 2);
  console.log(peso);
  console.log(altura);
  console.log(imc_value);

  // assign values 👍
  imc.value = imc_value;

});