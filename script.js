 // Hamburger toggle
 function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  
  let currentIndex = 0;
  const slideCount = slides.length;
  
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  });
  
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
  });
  
  // Auto-advance carousel (optional)
  setInterval(function() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  }, 5000);
});

// for scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.remove('active');
    }
  });
});