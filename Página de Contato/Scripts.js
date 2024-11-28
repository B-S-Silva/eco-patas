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

// Seleção de elementos do formulário
const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = form.querySelector("button"); // Botão de enviar

// Cria uma função para exibir a mensagem de sucesso abaixo do botão
function showSuccessMessage() {
    // Verifica se a mensagem já foi exibida para não duplicar
    let existingMessage = document.getElementById("success-message");
    if (existingMessage) {
        existingMessage.remove(); // Remove a mensagem anterior, se houver
    }

    // Cria o elemento para mostrar a mensagem de sucesso
    const successMessage = document.createElement("p");
    successMessage.id = "success-message"; // ID para referenciar e manipular a mensagem
    successMessage.textContent = "Mensagem enviada com sucesso. Aguarde nosso contato!";
    successMessage.style.color = "#28a745"; // Cor verde para o texto
    successMessage.style.textAlign = "center";
    successMessage.style.marginTop = "15px"; // Espaço entre o botão e a mensagem

    // Adiciona a mensagem logo abaixo do botão de envio
    submitButton.insertAdjacentElement("afterend", successMessage);

    // Após 3 segundos, redireciona para a página home
    setTimeout(() => {
        window.location.href = "../Home.html"; // Redireciona para a página Home
    }, 3000);
}

// Validação do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Valida formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido!");
        return;
    }

    // Exibe a mensagem de sucesso e redireciona
    showSuccessMessage();

    // Reseta o formulário
    form.reset();
});
