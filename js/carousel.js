document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  const itemCount = items.length;
  
  // Add this to your carousel.js
  function positionCaptions() {
    document.querySelectorAll('.carousel-item').forEach(item => {
      const caption = item.querySelector('.carousel-caption');
      const img = item.querySelector('.carousel-image');

      if (img.naturalHeight > item.clientHeight) {
        // Image is overflowing vertically
        caption.style.bottom = `${item.clientHeight - img.clientHeight}px`;
      } else {
        // Image fits completely
        caption.style.bottom = '0';
      }
    });
  }

  // Run on load and resize
  window.addEventListener('load', positionCaptions);
  window.addEventListener('resize', positionCaptions);

  // Create indicators
  items.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  // Update carousel position
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel();
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Optional: Auto-advance
  let autoSlideInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  carousel.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });

  carousel.parentElement.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }
});