var pacientesDoubleClick = document.querySelector("#tabela-pacientes");

pacientesDoubleClick.addEventListener("dblclick", (event) => {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(() => {
    event.target.parentNode.remove();
  }, [500])
});