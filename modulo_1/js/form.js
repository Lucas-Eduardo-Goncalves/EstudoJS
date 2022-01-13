var buttonAdd = document.querySelector('#adicionar-paciente');

function obterPacienteForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
};

function validaPaciente(paciente) {
  if(validaPesoAltura(paciente.peso, paciente.altura)) {
    return true;
  } else {
    false
  }
}

function montaTd(data, infoData) {
  var td = document.createElement("td");

  td.textContent = data;
  td.classList.add(infoData);

  return td;
};

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
};

buttonAdd.addEventListener("click", (event) => {
  event.preventDefault();

  // Busca o Formulário na DOM
  var form = document.querySelector('#form-adiciona');

  // Extraindo informações do paciente do form.
  const paciente = obterPacienteForm(form);

  // Cria a tr e a td.
  const pacienteTr = montaTr(paciente);

  // Valida o paciente
  if(!validaPaciente(paciente)) {
    alert("Paciente Inválido.")
    return;
  }

  // Adicionando o Paciente na tabela
  var tbody = document.querySelector("#tabela-pacientes");
  tbody.appendChild(pacienteTr);

  // Lipando o formulário
  form.reset();
});