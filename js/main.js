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


    var img1 = "../img/logo-dark.png",
      img2 = "../img/logo-light.png";
    var imgElement = document.getElementById("logo-image");
  
    imgElement.src = imgElement.src === img1 ? img2 : img1;

  });


  