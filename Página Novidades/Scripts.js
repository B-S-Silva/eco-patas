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

// Configurações de paginação
const itemsPerPage = 6; // Número de cards por página
const grid = document.querySelector('.grid-cards');
const cards = grid.querySelectorAll('.card');
const totalPages = Math.ceil(cards.length / itemsPerPage);

let currentPage = 1; // Página inicial

// Criar contêineres para navegação
const topNavContainer = document.createElement('div'); // Para as setas
topNavContainer.className = 'top-nav-container';

const bottomNavContainer = document.createElement('div'); // Para os botões numéricos
bottomNavContainer.className = 'bottom-nav-container';

const prevButton = document.createElement('button');
prevButton.innerHTML = '&lt;'; // Seta para esquerda
prevButton.className = 'nav-button prev';
prevButton.addEventListener('click', () => changePage(currentPage - 1));

const nextButton = document.createElement('button');
nextButton.innerHTML = '&gt;'; // Seta para direita
nextButton.className = 'nav-button next';
nextButton.addEventListener('click', () => changePage(currentPage + 1));

topNavContainer.appendChild(prevButton);
topNavContainer.appendChild(nextButton);

// Adicionar botões numéricos na parte inferior
for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = 'page-button';
    button.addEventListener('click', () => changePage(i));
    bottomNavContainer.appendChild(button);
}

grid.insertAdjacentElement('beforebegin', topNavContainer); // Setas acima da grade
grid.insertAdjacentElement('afterend', bottomNavContainer); // Botões numéricos abaixo da grade

// Função para exibir os itens da página atual
function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Esconde todos os cards
    cards.forEach((card, index) => {
        card.style.display = index >= start && index < end ? 'block' : 'none';
    });

    // Atualizar botões ativos
    document.querySelectorAll('.bottom-nav-container .page-button').forEach((btn, index) => {
        btn.classList.toggle('active', index === page - 1);
    });

    // Atualizar estado dos botões de navegação
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;

    currentPage = page; // Atualizar página atual
}

// Função para mudar de página
function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        showPage(page);
    }
}

// Estilizar navegação
const style = document.createElement('style');
style.textContent = `
    /* Contêiner superior (setas) */
    .top-nav-container {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    /* Contêiner inferior (botões numéricos) */
    .bottom-nav-container {
        display: flex;
        justify-content: center;
        gap: 5px;
        margin: 10px 0;
    }

    /* Botões comuns */
    .nav-button, .page-button {
        padding: 8px 12px;
        border: none;
        background-color: #f0f0f0;
        cursor: pointer;
        font-size: 14px;
        border-radius: 4px;
    }

    /* Botão ativo */
    .page-button.active {
        background-color: #798c32;
        color: white;
    }

    /* Hover */
    .nav-button:hover:not(:disabled), .page-button:hover {
        background-color: #798c32;
        color: white;
    }

    /* Botões desativados */
    .nav-button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

// Mostrar a primeira página inicialmente
showPage(1);