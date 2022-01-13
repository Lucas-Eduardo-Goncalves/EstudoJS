var botaoAdicionar = document.querySelector("#buscar-paciente");

function adicionaPacienteTabela(paciente) {
  const pacienteTr = montaTr(paciente);

  var tbody = document.querySelector("#tabela-pacientes");
  tbody.appendChild(pacienteTr);
}

botaoAdicionar.addEventListener('click', () => {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.send();

  xhr.addEventListener("load", () => {

    if(xhr.status === 200) {
      const response = xhr.responseText;
      const jsonResponse = JSON.parse(response);
  
      jsonResponse.forEach(paciente => {
        adicionaPacienteTabela(paciente)
      })
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  })
})