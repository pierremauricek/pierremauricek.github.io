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

const khaos_img = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⢮⣧⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣸⢟⠶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡪⢣⡜⡱⡱⣻⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣿⢕⡳⢬⢌⠻⣢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢎⢥⢱⢳⢎⠷⡫⣻⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⢹⡎⡲⣑⠕⣌⢦⠙⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢼⠱⡣⣣⣙⡵⣛⡿⣌⢻⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⢸⡇⡪⢔⡙⢦⢣⢝⡔⣝⢷⢄⣀⡀⡀⠀⠀⠀⠀⠀⡀⡀⠀⡀⠀⣀⡀⣠⠰⡢⣕⡕⣋⣎⡵⢥⣹⡣⢗⢌⡾⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠈⣷⢩⠮⡼⠴⡫⢞⡜⣵⢪⡳⣍⢝⢞⢮⡹⣄⠑⡥⢈⡆⢱⢈⣜⢵⢜⢭⡎⡳⢵⡭⢵⡭⡫⠺⣧⡛⡵⣑⠇⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠹⡪⣪⢳⣟⢏⣟⢼⡪⣗⠳⢵⡝⡮⣳⣛⡌⢒⢊⠆⣗⢱⡄⡹⣪⠗⡾⣕⡱⡺⣜⡳⠼⣝⣞⡵⣫⢎⡾⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢱⢕⠧⣝⣭⢵⢝⢮⠕⡯⡊⡧⠨⡎⡽⣐⠣⡙⣪⢧⡘⡆⢆⣜⠗⡼⡄⣍⠺⡠⡞⢔⠜⡥⠻⡮⡺⡅⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡣⢳⡔⡗⡑⠣⡃⠞⢕⠔⢄⢕⣻⠠⣻⣆⢏⡪⡾⢼⡂⡷⣝⠜⡵⡬⡂⢜⠕⢜⠄⠣⡨⢞⡕⣾⠂⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢢⢄⡩⡨⡈⠆⢩⠘⠄⠣⠈⢦⣻⠰⡱⣷⠱⣏⢗⣫⡳⣹⣝⡜⣹⢞⢔⢐⠉⡂⠑⢌⠂⢂⠕⢻⣧⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢸⡗⠪⡐⡈⢂⠅⡈⢄⢊⢄⠙⢮⣟⡵⡪⢞⡡⡫⢢⢓⡭⣞⣮⠷⡛⡤⣢⣼⣌⣪⣀⡣⣂⢔⠡⡹⢄⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢝⠩⢂⠄⡪⢀⣮⢮⡿⣿⣿⣿⣾⣦⢛⡱⢱⠌⢆⠕⢕⣜⣣⠭⣽⣿⣿⣻⣿⣿⡻⢯⡩⢂⡙⣯⢖⠌⡆⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡃⢒⢔⢔⠴⢂⠑⡾⣼⣿⣿⣾⢯⡻⡇⢌⢕⠡⡘⡎⢆⢪⡺⡢⣿⣫⡿⣿⢿⡳⠙⡂⢎⢊⡺⣵⢟⡼⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⠑⠥⡻⡆⠢⡊⡐⠨⠱⢜⡉⢑⡡⠟⢙⣔⠣⡊⢌⠩⢒⠅⡯⣺⢇⢍⢂⢄⣒⢈⡆⣰⣖⡭⡾⡶⣟⡼⡭⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢕⢬⡛⢮⡤⣱⡘⡧⡑⡢⡩⢉⢄⠜⡸⢕⡕⢕⠑⡜⢅⢛⢆⣿⡘⣕⠢⠥⣤⢳⡼⣵⠳⣽⣻⣝⣿⣻⠎⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠢⣹⢎⠷⣮⡭⣙⡖⣳⡱⣍⠲⠠⠪⡊⢞⢎⠢⠁⢊⠄⡑⠘⢮⡳⣈⠣⣚⢐⠫⣾⣏⣿⢿⣮⣟⣾⠉⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠐⢌⢯⡻⡰⣯⣋⣝⣥⡝⢇⣨⠣⡑⢌⠮⢇⣐⣆⡐⣴⢨⣦⣵⢋⢖⢓⣑⠯⡞⢶⣾⣻⢟⣷⣟⡎⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠘⠰⡧⣽⣽⡻⣽⡳⢃⠞⣈⠦⢹⠔⡢⢅⣙⠋⢬⡏⡺⣙⡭⡺⣕⣕⣑⣋⡚⢥⣬⣵⣯⡵⠋⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢜⣮⢼⣛⡶⣖⡂⣊⠴⢤⠗⢖⢙⣌⣳⢿⢢⣕⢪⡟⣾⢵⣬⣧⣩⣙⡌⢧⣻⢯⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠫⡮⣛⣺⣭⡗⣨⣂⡵⢳⡛⣭⣫⡮⣳⣵⡻⣼⣳⢵⢯⣶⣵⣳⡽⡻⡽⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢯⣾⣛⢎⣵⡽⡷⣻⣟⡶⣿⣻⡵⣟⣽⣟⣿⡻⣞⢧⣳⠻⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠛⠝⠮⢏⢶⢧⣻⢝⣮⢟⣾⡳⣽⡯⡻⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠊⠋⠊⠙⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
console.log('%c' + khaos_img, "color:black; font-size: 12px; font-family: monospace; font-weight: bold;");
