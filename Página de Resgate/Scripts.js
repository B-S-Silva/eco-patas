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

// Capturando elementos do DOM
const form = document.querySelector(".resgate-form");
const fotoInput = document.getElementById("foto");
const previewContainer = document.createElement("div");

// Adicionando o contêiner de pré-visualização de imagem
fotoInput.parentElement.appendChild(previewContainer);
previewContainer.style.marginTop = "10px";

// Função para pré-visualizar a imagem
fotoInput.addEventListener("change", () => {
    previewContainer.innerHTML = ""; // Limpar pré-visualizações antigas
    const file = fotoInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement("img");
            img.src = reader.result;
            img.alt = "Pré-visualização da foto";
            img.style.width = "100%";
            img.style.maxWidth = "200px";
            img.style.borderRadius = "8px";
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = "<p>Sem imagem selecionada.</p>";
    }
});

// Validação do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir o envio padrão do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    if (!nome || !email || !telefone || !endereco || !descricao) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    alert("Obrigado por sua contribuição! Nossa equipe entrará em contato em breve.");
    form.reset(); // Limpar o formulário
    previewContainer.innerHTML = ""; // Limpar a pré-visualização
});
