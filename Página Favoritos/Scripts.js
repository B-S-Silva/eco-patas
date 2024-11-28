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

    // Dados fictícios de animais favoritos
    const favoritos = [
    { nome: "Thor", descricao: "Thor é muito protetor e cuida da casa com dedicação.", idade: "2 anos", raca: "Vira-Lata", imagem: "imagens/pet1.jpg" },
    { nome: "Mia", descricao: "Mia adora um bom carinho no colo e tem muita energia.", idade: "1 ano", raca: "Vira-Lata", imagem: "imagens/pet6.png" }
];

// Função para gerar cards de favoritos
function generateCards(data, sectionId) {
    const section = document.getElementById(sectionId);
    section.innerHTML = ''; // Limpar a seção

    if (data.length === 0) {
        section.innerHTML = '<p class="no-favorites">Nenhum pet nos favoritos no momento.</p>';
        return;
    }

    data.forEach((animal, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <button class="heart-btn favorited" onclick="removeFavorite(${index})">
                ❤️
            </button>
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="card-body">
                <h3 class="card-title">${animal.nome}</h3>
                <p class="card-text">${animal.descricao}</p>
                <p class="card-text"><strong>Idade:</strong> ${animal.idade}</p>
                <p class="card-text"><strong>Raça:</strong> ${animal.raca}</p>
                <a href="../Página de Formulário/Formulário.html" class="btn-adotar">Adotar</a>
            </div>
        `;
        section.appendChild(card);
    });
}

// Função para remover um favorito
function removeFavorite(index) {
    favoritos.splice(index, 1); // Remove do array
    generateCards(favoritos, 'favoritos-section'); // Atualiza os favoritos exibidos
    alert('Pet removido dos favoritos!');
}

// Função para buscar favoritos pelo nome
function searchFavorites() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filtered = favoritos.filter(animal => animal.nome.toLowerCase().includes(searchValue));
    generateCards(filtered, 'favoritos-section');
}

// Inicializa a exibição dos favoritos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    generateCards(favoritos, 'favoritos-section');
});