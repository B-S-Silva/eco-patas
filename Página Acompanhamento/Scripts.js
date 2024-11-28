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

// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento que exibe o número de árvores plantadas
    const treesCountElement = document.getElementById("trees-count");

    // Obtém o botão que será clicado para incrementar o número
    const plantTreeButton = document.getElementById("plant-tree");

    // Define o valor inicial das árvores plantadas
    let treesPlanted = 500;

    // Função para atualizar o número de árvores
    function updateTrees() {
        treesPlanted++;  // Incrementa o número de árvores
        treesCountElement.textContent = treesPlanted;  // Atualiza o texto no elemento
    }

    // Define a função para o evento de clique no botão
    plantTreeButton.addEventListener("click", updateTrees);
});
