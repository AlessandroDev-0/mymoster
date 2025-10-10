// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os slides, dots e botões de navegação
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".arrow.prev");
  const nextBtn = document.querySelector(".arrow.next");
  let currentSlide = 0; // Índice do slide atual
  let slideInterval;    // Referência para o intervalo do slideshow

  // Exibe o slide de acordo com o índice passado
  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active")); // Remove classe ativa de todos os slides
    dots.forEach((dot) => dot.classList.remove("active"));       // Remove classe ativa de todos os dots

    // Garante que o índice está dentro do intervalo dos slides
    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active"); // Ativa o slide atual
    dots[currentSlide].classList.add("active");   // Ativa o dot correspondente
  }

  // Avança para o próximo slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Inicia o slideshow automático
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos
  }

  // Evento de clique nos dots para trocar de slide manualmente
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval); // Para o slideshow automático
      showSlide(index);             // Mostra o slide selecionado
      startSlideShow();             // Reinicia o slideshow automático
    });
  });

  // Evento de clique na seta para voltar ao slide anterior
  prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide - 1);
    startSlideShow();
  });

  // Evento de clique na seta para avançar ao próximo slide
  nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide + 1);
    startSlideShow();
  });

  // Inicializa o slideshow automático ao carregar a página
  startSlideShow();
});
