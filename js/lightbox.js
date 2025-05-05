document.querySelectorAll('.lightbox-image').forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = img.src;
  
      lightbox.classList.toggle('show'); // Add the "show" class to trigger the animation
      document.body.classList.toggle('lock-scroll'); // Prevent scrolling
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show'); // Remove the "show" class to hide the lightbox
    document.body.classList.remove('lock-scroll'); // Re-enable scrolling
  });
  
  window.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
      lightbox.classList.remove('show'); // Remove the "show" class to hide the lightbox
      document.body.classList.remove('lock-scroll'); // Re-enable scrolling
    }
  });