document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  const itemCount = items.length;

  // Debug logging
  console.log('Carousel initialized:', {
    carousel: !!carousel,
    itemCount: itemCount,
    prevBtn: !!prevBtn,
    nextBtn: !!nextBtn,
    indicators: !!indicatorsContainer
  });

  // Exit early if essential elements are missing
  if (!carousel || itemCount === 0) {
    console.error('Carousel elements not found or no items');
    return;
  }

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




  // Update carousel position and active indicator
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });

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

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Handle window resize (removed positionCaptions since we removed captions)

  // Auto-advance with pause on hover
  let autoSlideInterval;

  function startAutoSlide() {
    console.log('Starting auto-slide with 4 second interval');
    autoSlideInterval = setInterval(() => {
      console.log('Auto-advancing to next slide');
      nextSlide();
    }, 4000);
  }

  function stopAutoSlide() {
    console.log('Stopping auto-slide');
    clearInterval(autoSlideInterval);
  }

  // Start auto-advance
  startAutoSlide();

  // Pause on hover
  const carouselContainer = carousel.parentElement;
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
  }

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
    autoSlideInterval = setInterval(nextSlide, 4000); // Resume auto-advance
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }
});