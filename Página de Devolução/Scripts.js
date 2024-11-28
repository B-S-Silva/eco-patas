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

document.addEventListener("DOMContentLoaded", function() {
    // Função para validar se o responsável tem 18 anos ou mais
    const dataNascimentoInput = document.getElementById("dataNascimentoResponsavel");
    const dataNascimentoError = document.getElementById("dataNascimentoError");

    // Função para verificar a idade
    function verificarIdade() {
        const dataNascimento = new Date(dataNascimentoInput.value);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade < 18) {
            dataNascimentoError.style.display = "block"; // Exibe a mensagem de erro
        } else {
            dataNascimentoError.style.display = "none"; // Esconde a mensagem de erro
        }
    }

    // Verificar a idade assim que o campo dataNascimento for alterado
    dataNascimentoInput.addEventListener("change", verificarIdade);

    // Função para atualizar os nomes dos pets com base no tipo selecionado
    const tipoPetSelect = document.getElementById("tipoPet");
    const nomePetSelect = document.getElementById("nomePet");

    // Função para atualizar os nomes dos pets
    function updatePetNames() {
        const tipoPet = tipoPetSelect.value;
        
        // Limpar as opções anteriores
        nomePetSelect.innerHTML = '<option value="" disabled selected>Selecione um nome</option>';

        let nomes = [];

        if (tipoPet === "cao") {nomes = [
            "Dartanã", "Lola", "Bella", "Lúbac", "Shown", "Zoe", "Thor", "Maria", "Carlinhos Magnata", "Sandro", 
            "Max", "Zen", "Buddy", "Duke", "Rocky", "Oscar", "Rex", "Charlie", "Fred", "Sammy", 
            "Leo", "Luca", "Spike", "Rock", "Milo", "Finn", "Zeke", "Bruno", "Toby", "Rusty"
        ];

        } else if (tipoPet === "gato") {nomes = [
            "Lião", "Oliver", "Luna", "Simba", "Chloe", "Leo", "Ronaldo Nazário", "Mia", "Safado Gamer", "Garfo", "Simba", 
            "Nina", "Tico", "Bella", "Chester", "Luna", "Sunny", "Pixel", "Charlie", "Zara", "Milo", "Shadow", 
            "Lana", "Misty", "Hunter", "Nico", "Oscar", "Cleo", "Whiskers", "Pepper"
            ];
        }

        // Preencher o dropdown de nomes com base no tipo de pet
        nomes.forEach(function(nome) {
            const option = document.createElement("option");
            option.value = nome.toLowerCase();
            option.textContent = nome;
            nomePetSelect.appendChild(option);
        });
    }

    // Atualizar os nomes dos pets sempre que o tipo for alterado
    tipoPetSelect.addEventListener("change", updatePetNames);

    // Função para enviar o formulário e mostrar a mensagem de sucesso
    const form = document.getElementById("returnForm");
    const successMessage = document.getElementById("successMessage");

    // Função para exibir a mensagem de sucesso após o envio
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem de sucesso
        successMessage.style.display = "block";

        // Limpa o formulário
        form.reset();

        // Esconde a mensagem de sucesso após alguns segundos e redireciona
        setTimeout(function() {
            successMessage.style.display = "none";

            // Redireciona para a página home
            window.location.href = "../Home.html"; // Substitua "/home" pela URL desejada
        }, 3000); // Espera 3 segundos antes de redirecionar
    });

});
