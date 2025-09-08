// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".arrow.prev");
  const nextBtn = document.querySelector(".arrow.next");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Click events for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(index);
      startSlideShow();
    });
  });

  // Arrow controls
  prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide - 1);
    startSlideShow();
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    showSlide(currentSlide + 1);
    startSlideShow();
  });

  // Initialize slideshow
  startSlideShow();
});
