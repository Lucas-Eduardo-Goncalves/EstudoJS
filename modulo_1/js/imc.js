const pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPesoAltura(peso, altura) {
  if(peso >= 0 && peso < 1000) {
    if (altura > 0 && altura < 3.0) {
      return true
    } else {
      return false
    }
  } 
}

pacientes.forEach(paciente => {
  const infoPeso = paciente.querySelector(".info-peso");
  const infoAltura = paciente.querySelector(".info-altura");
  const infoIMC = paciente.querySelector(".info-imc");
  
  let isValid = validaPesoAltura(infoPeso.textContent, infoAltura.textContent);
  
  if (!isValid) {
    infoIMC.textContent = "Inválido";
    paciente.classList.add("paciente-invalido");
  };
  
  if (isValid) {
    infoIMC.textContent = calculaImc(infoPeso.textContent, infoAltura.textContent);
  };
});