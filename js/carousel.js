document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  const itemCount = items.length;

  // Initialize indicators
  function createIndicators() {
    indicatorsContainer.innerHTML = ''; // Clear existing indicators
    items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  // Position captions based on image overflow
  function positionCaptions() {
    items.forEach(item => {
      const caption = item.querySelector('.carousel-caption');
      const img = item.querySelector('.carousel-image');

      if (!img || !caption) return;

      // Wait for image to load if not already loaded
      if (!img.complete) {
        img.addEventListener('load', function onLoad() {
          img.removeEventListener('load', onLoad);
          calculateCaptionPosition(item, img, caption);
        });
        return;
      }

      calculateCaptionPosition(item, img, caption);
    });
  }

  function calculateCaptionPosition(item, img, caption) {
    const containerHeight = item.clientHeight;
    const imgHeight = img.clientHeight;
    const overflow = imgHeight - containerHeight;

    // Reset any previous positioning
    caption.style.bottom = '';

    if (overflow > 0) {
      // Image is overflowing - adjust caption position
      caption.style.bottom = `${overflow}px`;
    }
    // Else: default positioning (bottom: 0) is fine
  }

  // Update carousel position and active indicator
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });

    // Recalculate caption positions after slide change
    positionCaptions();
  }

  // Navigation functions
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel();
  }

  // Initialize
  createIndicators();
  positionCaptions();

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Handle window resize
  window.addEventListener('resize', positionCaptions);

  // Auto-advance with pause on hover
  let autoSlideInterval = setInterval(nextSlide, 5000);

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
    clearInterval(autoSlideInterval); // Pause auto-advance during interaction
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    autoSlideInterval = setInterval(nextSlide, 5000); // Resume auto-advance
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }
});