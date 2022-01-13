var inputFiltro = document.querySelector("#filtrar-tabela");

inputFiltro.addEventListener("input", () => {

  var pacientes = document.querySelectorAll(".paciente");

  if(inputFiltro.value.length > 0) {
    for(var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];

      var tdNome = paciente.querySelector(".info-nome");
      var expressao = new RegExp(inputFiltro.value, "i");

      if (expressao.test(tdNome.textContent)) {
        paciente.classList.remove('sumirTd');
      } else {
        paciente.classList.add('sumirTd');
      }
    }
  } else {
    for(var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove('sumirTd');
    }
  }
})