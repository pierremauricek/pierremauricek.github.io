document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('hidden');
  });


function spawnFooterImage(event) {
    event.preventDefault(); // prevent link navigation, remove if not needed
  
    const img = document.createElement('img');
    img.src = '/img/heart.png'; // your image URL here
    img.className = 'spawned-footer-img ';
  
    // Position the image at the cursor
    img.style.left = `${event.clientX}px`;
    img.style.top = `${event.clientY}px`;
  
    document.body.appendChild(img);
  
    // Optional: fade out before removal
    setTimeout(() => {
      img.style.opacity = '0';
      setTimeout(() => img.remove(), 300); // wait for fade-out
    }, 1000); // remove after 1 second
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.dark-mode-checkbox');
  
    checkbox.checked = localStorage.getItem('dark_mode_enabled') === 'true';
  
    checkbox.addEventListener('change', function (event) {
      localStorage.setItem('dark_mode_enabled', event.currentTarget.checked);
    });
  });