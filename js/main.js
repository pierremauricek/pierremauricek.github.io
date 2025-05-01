 // MENU TOGGLE

  const toggleMenu = document.getElementById('menu-button');
  const menu = document.getElementById('menu');

  toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.classList.toggle('lock-scroll');
  });

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('lock-scroll');
    });
});
  // MENU TOGGLE







const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Lade gespeichertes Theme beim Laden der Seite
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

// Toggle theme and update the logo when the toggle is clicked
toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    toggle.textContent="Theme: " + currentTheme;
});


const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateTheme(e) {
  const newTheme = e.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
}

// Initial setzen
updateTheme(mediaQuery);

// Listener hinzufügen
mediaQuery.addEventListener('change', updateTheme);



 //Change Main Image on Scroll with Fade Animation
 document.addEventListener('scroll', function () {
   const contentLeft = document.getElementById("content-left");
 
 //Determine scroll percentage
   const h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
 
   const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
 
   setTimeout(() => {
     if (percent > 60) {
        contentLeft.src = "/img/khaos_1.jpg";  
     } else if (percent >= 0) {
        contentLeft.src = "/img/khaos.jpg";
     }
   }, 300); // Match this duration to the CSS transition duration
 });



// LIGHTBOX

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





// Easter Egg
const khaos_img = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⢮⣧⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣸⢟⠶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡪⢣⡜⡱⡱⣻⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣿⢕⡳⢬⢌⠻⣢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢎⢥⢱⢳⢎⠷⡫⣻⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⢹⡎⡲⣑⠕⣌⢦⠙⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢼⠱⡣⣣⣙⡵⣛⡿⣌⢻⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⢸⡇⡪⢔⡙⢦⢣⢝⡔⣝⢷⢄⣀⡀⡀⠀⠀⠀⠀⠀⡀⡀⠀⡀⠀⣀⡀⣠⠰⡢⣕⡕⣋⣎⡵⢥⣹⡣⢗⢌⡾⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠈⣷⢩⠮⡼⠴⡫⢞⡜⣵⢪⡳⣍⢝⢞⢮⡹⣄⠑⡥⢈⡆⢱⢈⣜⢵⢜⢭⡎⡳⢵⡭⢵⡭⡫⠺⣧⡛⡵⣑⠇⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠹⡪⣪⢳⣟⢏⣟⢼⡪⣗⠳⢵⡝⡮⣳⣛⡌⢒⢊⠆⣗⢱⡄⡹⣪⠗⡾⣕⡱⡺⣜⡳⠼⣝⣞⡵⣫⢎⡾⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢱⢕⠧⣝⣭⢵⢝⢮⠕⡯⡊⡧⠨⡎⡽⣐⠣⡙⣪⢧⡘⡆⢆⣜⠗⡼⡄⣍⠺⡠⡞⢔⠜⡥⠻⡮⡺⡅⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡣⢳⡔⡗⡑⠣⡃⠞⢕⠔⢄⢕⣻⠠⣻⣆⢏⡪⡾⢼⡂⡷⣝⠜⡵⡬⡂⢜⠕⢜⠄⠣⡨⢞⡕⣾⠂⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢢⢄⡩⡨⡈⠆⢩⠘⠄⠣⠈⢦⣻⠰⡱⣷⠱⣏⢗⣫⡳⣹⣝⡜⣹⢞⢔⢐⠉⡂⠑⢌⠂⢂⠕⢻⣧⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢸⡗⠪⡐⡈⢂⠅⡈⢄⢊⢄⠙⢮⣟⡵⡪⢞⡡⡫⢢⢓⡭⣞⣮⠷⡛⡤⣢⣼⣌⣪⣀⡣⣂⢔⠡⡹⢄⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢝⠩⢂⠄⡪⢀⣮⢮⡿⣿⣿⣿⣾⣦⢛⡱⢱⠌⢆⠕⢕⣜⣣⠭⣽⣿⣿⣻⣿⣿⡻⢯⡩⢂⡙⣯⢖⠌⡆⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡃⢒⢔⢔⠴⢂⠑⡾⣼⣿⣿⣾⢯⡻⡇⢌⢕⠡⡘⡎⢆⢪⡺⡢⣿⣫⡿⣿⢿⡳⠙⡂⢎⢊⡺⣵⢟⡼⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⠑⠥⡻⡆⠢⡊⡐⠨⠱⢜⡉⢑⡡⠟⢙⣔⠣⡊⢌⠩⢒⠅⡯⣺⢇⢍⢂⢄⣒⢈⡆⣰⣖⡭⡾⡶⣟⡼⡭⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢕⢬⡛⢮⡤⣱⡘⡧⡑⡢⡩⢉⢄⠜⡸⢕⡕⢕⠑⡜⢅⢛⢆⣿⡘⣕⠢⠥⣤⢳⡼⣵⠳⣽⣻⣝⣿⣻⠎⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠢⣹⢎⠷⣮⡭⣙⡖⣳⡱⣍⠲⠠⠪⡊⢞⢎⠢⠁⢊⠄⡑⠘⢮⡳⣈⠣⣚⢐⠫⣾⣏⣿⢿⣮⣟⣾⠉⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠐⢌⢯⡻⡰⣯⣋⣝⣥⡝⢇⣨⠣⡑⢌⠮⢇⣐⣆⡐⣴⢨⣦⣵⢋⢖⢓⣑⠯⡞⢶⣾⣻⢟⣷⣟⡎⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠘⠰⡧⣽⣽⡻⣽⡳⢃⠞⣈⠦⢹⠔⡢⢅⣙⠋⢬⡏⡺⣙⡭⡺⣕⣕⣑⣋⡚⢥⣬⣵⣯⡵⠋⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢜⣮⢼⣛⡶⣖⡂⣊⠴⢤⠗⢖⢙⣌⣳⢿⢢⣕⢪⡟⣾⢵⣬⣧⣩⣙⡌⢧⣻⢯⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠫⡮⣛⣺⣭⡗⣨⣂⡵⢳⡛⣭⣫⡮⣳⣵⡻⣼⣳⢵⢯⣶⣵⣳⡽⡻⡽⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢯⣾⣛⢎⣵⡽⡷⣻⣟⡶⣿⣻⡵⣟⣽⣟⣿⡻⣞⢧⣳⠻⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠛⠝⠮⢏⢶⢧⣻⢝⣮⢟⣾⡳⣽⡯⡻⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠊⠋⠊⠙⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
console.log('%c' + khaos_img, "color:black; font-size: 12px; font-family: monospace; font-weight: bold;");
