document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = dropdown.querySelector('.dropdown-btn');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Quando clicar no botão do dropdown, exibe ou esconde o menu
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });

    // Fecha o dropdown se o usuário clicar fora do menu
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

  // Função para formatar a data em português
  function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('pt-BR', options); // Formato: 27 de Novembro de 2024
  }

  // Função para exibir a data de revisão no topo da página
  function displayRevisionDate() {
    const revisionDateElement = document.getElementById('revision-date');
    const formattedDate = getFormattedDate();
    revisionDateElement.textContent = `Última Revisão: ${formattedDate}`;
  }

  // Chama a função para exibir a data quando a página carregar
  window.onload = displayRevisionDate;