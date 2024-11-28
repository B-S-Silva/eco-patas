document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Movendo o track
        updateIndicators();
    }

    // Atualiza as bolinhas de navegação
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Função para mover para o próximo slide
    function moveNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    // Função para mover para o slide anterior
    function movePrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Função para mover para um slide específico ao clicar na bolinha
    function moveToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Eventos dos botões
    prevButton.addEventListener('click', movePrev);
    nextButton.addEventListener('click', moveNext);

    // Eventos das bolinhas
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            moveToSlide(parseInt(indicator.dataset.index));
        });
    });

    // Iniciar slide automático
    let autoSlideInterval;
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(moveNext, 3000); // Muda a cada 3 segundos
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Pausar o slide automático quando o mouse passar sobre o carrossel
    const carouselContainer = document.querySelector('.testimonial-carousel');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);

    // Ajustar o carrossel quando a janela for redimensionada
    window.addEventListener('resize', updateCarousel);

    // Inicializar o carrossel
    updateCarousel();
    startAutoSlide();
});

function filterAnimals(category) {
    const buttons = document.querySelectorAll(".category-btn");
    const animalCards = document.querySelectorAll(".animal-card");
  
    // Atualiza o botão ativo
    buttons.forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`.category-btn[onclick="filterAnimals('${category}')"]`).classList.add("active");
  
    // Mostra/oculta os animais com base na categoria
    animalCards.forEach((card) => {
      if (card.classList.contains(category)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

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
