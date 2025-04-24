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

  






/*

  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Lade gespeichertes Theme beim Laden der Seite
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }

  // Toggle-Funktion
  toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
  
*/


  const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const logo = document.querySelector('.logo img'); // Select the logo image element
const menu = document.querySelector('.menu-button img'); // Select the logo image element



// Function to update the logo based on the theme
function updateLogo(theme) {
    if (theme === 'dark') {
        logo.src = '/img/logo-light.png'; // Path to the dark theme logo
        logo.src = '/img/menu-light.png'; // Path to the dark theme logo
    } else {
        menu.src = '/img/logo-dark.png'; // Path to the light theme logo
        menu.src = '/img/menu-light.png'; // Path to the dark theme logo
    }
}

// Load the saved theme and set the correct logo on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateLogo(savedTheme);
} else {
    // Default to light theme if no theme is saved
    updateLogo('light');
}

// Toggle theme and update the logo when the toggle is clicked
toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateLogo(currentTheme);
});