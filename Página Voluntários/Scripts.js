// Script para validar e processar o formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.style.color = '#97A43C'; // Cor verde para o feedback
    thankYouMessage.style.marginTop = '20px';

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Capturando os valores do formulário
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const activity = document.querySelector('#activity').value;

        // Validação simples
        if (name === '' || email === '' || activity === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Exibindo a mensagem de agradecimento
        thankYouMessage.textContent = `Obrigado, ${name}! Entraremos em contato em breve para sua participação como voluntário(a) na atividade "${activity}".`;
        form.appendChild(thankYouMessage);

        // Limpando os campos do formulário
        form.reset();
    });
});

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

// Seleciona o formulário e a mensagem de sucesso
const form = document.getElementById('volunteerForm');
const successMessage = document.getElementById('successMessage');

// Função que impede o envio imediato do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário

    // Exibe a mensagem de sucesso
    successMessage.style.display = 'block';

    // Aguarda 3 segundos e redireciona para a página inicial
    setTimeout(function() {
        // Redireciona para a página home (ajuste o URL conforme necessário)
        window.location.href = '../Home.html';  // Substitua com o caminho da sua página inicial
    }, 3000);
});