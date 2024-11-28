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

// Nomes de cães e gatos (sem repetições)
const nomesCao = [
    "Dartanã", "Lola", "Bella", "Lúbac", "Shown", "Zoe", "Thor", "Maria", "Carlinhos Magnata", "Sandro", 
    "Max", "Zen", "Buddy", "Duke", "Rocky", "Oscar", "Rex", "Charlie", "Fred", "Sammy", 
    "Leo", "Luca", "Spike", "Rock", "Milo", "Finn", "Zeke", "Bruno", "Toby", "Rusty"
];

const nomesGato = [
    "Lião", "Oliver", "Luna", "Simba", "Chloe", "Leo", "Ronaldo Nazário", "Mia", "Safado Gamer", "Garfo", "Simba", 
    "Nina", "Tico", "Bella", "Chester", "Luna", "Sunny", "Pixel", "Charlie", "Zara", "Milo", "Shadow", 
    "Lana", "Misty", "Hunter", "Nico", "Oscar", "Cleo", "Whiskers", "Pepper"
];

// Função para atualizar os nomes no segundo dropdown
function updatePetNames() {
    const tipoPet = document.getElementById("tipoPet").value;
    const nomePetSelect = document.getElementById("nomePet");
    
    // Limpar opções existentes
    nomePetSelect.innerHTML = '<option value="" disabled selected>Selecione um nome</option>';

    let nomes;
    
    // Escolher a lista de nomes dependendo do tipo de pet
    if (tipoPet === "cao") {
        nomes = nomesCao;
    } else if (tipoPet === "gato") {
        nomes = nomesGato;
    } else {
        return;  // Se nenhum tipo foi selecionado, não faz nada
    }
    
    // Adicionar os nomes ao dropdown
    nomes.forEach(nome => {
        const option = document.createElement("option");
        option.value = nome.toLowerCase();
        option.textContent = nome;
        nomePetSelect.appendChild(option);
    });
}

// Exibir a mensagem de sucesso após o envio
document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(function() {
        window.location.href = '../Home.html'; // Redirecionar após 3 segundos
    }, 3000);
});

document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    const dataNascimento = document.getElementById("dataNascimento").value;
    const dataNascimentoError = document.getElementById("dataNascimentoError");

    // Se a data de nascimento não for fornecida, não faz nada
    if (!dataNascimento) {
        return;
    }

    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    
    // Calculando a idade
    let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();
    const dia = hoje.getDate() - dataNascimentoDate.getDate();

    // Se o mês atual for menor do que o mês de nascimento, ou se for o mês e o dia forem menores, subtrai 1
    if (mes < 0 || (mes === 0 && dia < 0)) {
        idade--;
    }

    // Verifica se a pessoa tem menos de 18 anos
    if (idade < 18) {
        // Se for menor que 18 anos, exibe a mensagem de erro e impede o envio do formulário
        dataNascimentoError.style.display = "inline";
        event.preventDefault(); // Impede o envio do formulário
    } else {
        // Se a pessoa tiver 18 anos ou mais, remove a mensagem de erro (se existir)
        dataNascimentoError.style.display = "none";
        
        // Limpar o formulário após o envio bem-sucedido
        event.target.reset();  // Isso limpa todos os campos do formulário

        // Após a limpeza, você pode redirecionar o usuário para a página de agradecimento ou outro destino
        setTimeout(() => {
            window.location.href = "../Home.html";  // Redireciona após 2 segundos
        }, 2000);
    }
});
