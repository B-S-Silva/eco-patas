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
const caes = [
    { nome: "Thor", descricao: "Thor é muito protetor e cuida da casa com dedicação.", imagem: "imagens/pet1.jpg" },
    { nome: "Maria", descricao: "Maria é calma e ideal para lares tranquilos.", imagem: "imagens/pet2.jpg" },
    { nome: "Carlinhos Magnata", descricao: "Carlinhos Magnata adora brincar ao ar livre e correr.", imagem: "imagens/pet3.webp" },
    { nome: "Sandro", descricao: "Sandro é fiel e protetor, ótimo para a família.", imagem: "imagens/pet4.jpg" },
    { nome: "Max", descricao: "Max tem muita energia e adora socializar com outros cães.", imagem: "imagens/1.jpg" },
    { nome: "Zen", descricao: "Zen é calmo e ama descansar ao lado dos seus donos.", imagem: "imagens/2.jpg" },
    { nome: "Buddy", descricao: "Buddy é extrovertido e muito amigável com crianças.", imagem: "imagens/3.png" },
    { nome: "Duke", descricao: "Duke é inteligente e aprende rápido novos truques.", imagem: "imagens/4.jpg" },
    { nome: "Rocky", descricao: "Rocky é brincalhão e adora correr no parque.", imagem: "imagens/5.jpg" },
    { nome: "Oscar", descricao: "Oscar é leal e sempre atento à sua família.", imagem: "imagens/7.jpg" },
    { nome: "Rex", descricao: "Rex é brincalhão e cheio de energia.", imagem: "imagens/8.webp" },
    { nome: "Charlie", descricao: "Charlie adora se divertir e é cheio de energia.", imagem: "imagens/9.jpg" },
    { nome: "Fred", descricao: "Fred é tranquilo e ótimo para quem mora em apartamento.", imagem: "imagens/10.webp" },
    { nome: "Sammy", descricao: "Sammy tem um temperamento amigável e adora receber carinho.", imagem: "imagens/11.jpg" },
    { nome: "Leo", descricao: "Leo é sociável e adora brincar com outros animais.", imagem: "imagens/12.webp" },
    { nome: "Luca", descricao: "Luca é muito carinhoso e gosta de estar perto dos seus donos.", imagem: "imagens/13.jpg" },
    { nome: "Spike", descricao: "Spike é brincalhão e cheio de energia.", imagem: "imagens/14.jpg" },
    { nome: "Rock", descricao: "Rock é protetor e adora se divertir com crianças.", imagem: "imagens/15.webp" },
    { nome: "Milo", descricao: "Milo é calmo e sempre está disposto a passeios tranquilos.", imagem: "imagens/21.jpg" },
    { nome: "Finn", descricao: "Finn adora brincar na água e se refrescar no verão.", imagem: "imagens/16.jpg" },
    { nome: "Zeke", descricao: "Zeke é super amigável e adora interagir com outros animais.", imagem: "imagens/17.jpg" },
    { nome: "Bruno", descricao: "Bruno é leal e muito ligado à sua família.", imagem: "imagens/18.jpg" },
    { nome: "Toby", descricao: "Toby adora correr atrás de bolas e brincar ao ar livre.", imagem: "imagens/19.jpg" },
    { nome: "Rusty", descricao: "Rusty é calmo e adora descansar ao lado dos donos.", imagem: "imagens/20.jpg" }
];

const gatos = [
    { nome: "Ronaldo Nazário", descricao: "Ronaldo Nazário adora explorar novas alturas.", imagem: "imagens/pet5.webp" },
    { nome: "Mia", descricao: "Mia adora um bom carinho no colo.", imagem: "imagens/pet6.png" },
    { nome: "Safado gamer", descricao: "Safado gamer gosta de ficar relaxando ao sol.", imagem: "imagens/pet7.jpg" },
    { nome: "Garfo", descricao: "Garfo é brincalhão e curioso, sempre explorando lugares.", imagem: "imagens/pet8.jpg" },
    { nome: "Simba", descricao: "Simba é independente, mas sempre adora um carinho.", imagem: "imagens/g1.jpeg" },
    { nome: "Nina", descricao: "Nina adora se esconder em lugares altos.", imagem: "imagens/g2.jpg" },
    { nome: "Tico", descricao: "Tico é muito brincalhão e adora perseguir brinquedos.", imagem: "imagens/g3.jpeg" },
    { nome: "Bella", descricao: "Bella adora dormir por horas no mesmo lugar.", imagem: "imagens/g4.jpg" },
    { nome: "Chester", descricao: "Chester é muito sociável e gosta de interagir com outros gatos.", imagem: "imagens/g5.webp" },
    { nome: "Luna", descricao: "Luna é quieta, mas sempre curiosa.", imagem: "imagens/g6.jpg" },
    { nome: "Sunny", descricao: "Sunny adora um bom banho de sol.", imagem: "imagens/g7.jpg" },
    { nome: "Pixel", descricao: "Pixel é independente e sempre encontra seu próprio espaço.", imagem: "imagens/g8.jpg" },
    { nome: "Charlie", descricao: "Charlie é muito tranquilo e gosta de se aventurar no jardim.", imagem: "imagens/g9.jpg" },
    { nome: "Zara", descricao: "Zara adora explorar os cantos da casa.", imagem: "imagens/g10.jpg" },
    { nome: "Milo", descricao: "Milo gosta de brincar de esconde-esconde.", imagem: "imagens/g11.jpg" },
    { nome: "Shadow", descricao: "Shadow adora perseguir luzes e sombras.", imagem: "imagens/g12.jpg" },
    { nome: "Lana", descricao: "Lana é muito carinhosa e adora ser mimada.", imagem: "imagens/g13.jpg" },
    { nome: "Misty", descricao: "Misty é calmo e adora observar a rua da janela.", imagem: "imagens/g14.webp" },
    { nome: "Hunter", descricao: "Hunter é um excelente caçador de brinquedos.", imagem: "imagens/g15.webp" },
    { nome: "Nico", descricao: "Nico gosta de explorar todos os cantos da casa.", imagem: "imagens/g16.jpg" },
    { nome: "Oscar", descricao: "Oscar é muito ativo e sempre em movimento.", imagem: "imagens/g17.jpg" },
    { nome: "Cleo", descricao: "Cleo é descontraído e adora dormir em lugares quentes.", imagem: "imagens/g18.jpg" },
    { nome: "Whiskers", descricao: "Whiskers é independente, mas adora um bom carinho.", imagem: "imagens/g19.jpg" },
    { nome: "Pepper", descricao: "Pepper é muito curioso e sempre explorando novos lugares.", imagem: "imagens/g20.jpg" }
];

const ITEMS_PER_PAGE = 8;
let currentPageCaes = 1;
let currentPageGatos = 1;

// Função para gerar cartões e paginação
function generateCards(data, sectionId, paginationId, currentPage) {
    const section = document.getElementById(sectionId);
    const pagination = document.getElementById(paginationId);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    section.innerHTML = '';
    pageData.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="card-body">
                <h3 class="card-title">${animal.nome}</h3>
                <p class="card-text">${animal.descricao}</p>
                <a href="../Página de Formulário/Formulário.html" class="btn-adotar">Adotar</a>
            </div>`;
        section.appendChild(card);
    });

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    pagination.innerHTML = '';
    
    // Botão de página anterior
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<img src="setaesquerda.png" alt="Página Anterior">';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            generateCards(data, sectionId, paginationId, currentPage - 1);
        }
    });
    pagination.appendChild(prevButton);

    // Botões de paginação
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            generateCards(data, sectionId, paginationId, i);
        });
        pagination.appendChild(button);
    }

    // Botão de próxima página
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<img src="setadireita.png" alt="Próxima Página">';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            generateCards(data, sectionId, paginationId, currentPage + 1);
        }
    });
    pagination.appendChild(nextButton);
}

// Inicialização
generateCards(caes, 'caes-section', 'caes-pagination', currentPageCaes);
generateCards(gatos, 'gatos-section', 'gatos-pagination', currentPageGatos);
// Função para gerar os cartões
function generateCards(data, sectionId, paginationId, currentPage) {
    const section = document.getElementById(sectionId);
    const pagination = document.getElementById(paginationId);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    section.innerHTML = '';
    pageData.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Adicionando conteúdo do card
        card.innerHTML = `
            <button class="heart-btn" onclick="toggleFavorite(this)">
                ❤️
            </button>
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="card-body">
                <h3 class="card-title">${animal.nome}</h3>
                <p class="card-text">${animal.descricao}</p>
                <a href="../Página de Formulário/Formulário.html" class="btn-adotar">Adotar</a>
            </div>
        `;
        
        section.appendChild(card);
    });

    // Função para paginação
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            generateCards(data, sectionId, paginationId, i);
        });
        pagination.appendChild(button);
    }
}

// Função para alternar o status de favoritado
function toggleFavorite(button) {
    button.classList.toggle('favorited');
    if (button.classList.contains('favorited')) {
        alert('Pet favoritado!');
    } else {
        alert('Pet removido dos favoritos!');
    }
}

// Inicialização
generateCards(caes, 'caes-section', 'caes-pagination', 1);
generateCards(gatos, 'gatos-section', 'gatos-pagination', 1);