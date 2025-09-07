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







const root = document.documentElement;

// Lade gespeichertes Theme beim Laden der Seite
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

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
 // document.addEventListener('scroll', function () {
 //    const contentLeft = document.getElementById("content-left");
 //    const h = document.documentElement,
 //    b = document.body,
 //    st = 'scrollTop',
 //    sh = 'scrollHeight';
 // 
 //   const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
 // 
 //   setTimeout(() => {
 //     if (percent > 60) {
 //        contentLeft.src = "/img/khaos_2.jpg";  
 //     } else if (percent >= 0) {
 //        contentLeft.src = "/img/khaos.jpg";
 //     }
 //   }, 300);
 // });


// Easter Egg
const khaos_img = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⢮⣧⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣸⢟⠶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡪⢣⡜⡱⡱⣻⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣿⢕⡳⢬⢌⠻⣢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢎⢥⢱⢳⢎⠷⡫⣻⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⢹⡎⡲⣑⠕⣌⢦⠙⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢼⠱⡣⣣⣙⡵⣛⡿⣌⢻⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⢸⡇⡪⢔⡙⢦⢣⢝⡔⣝⢷⢄⣀⡀⡀⠀⠀⠀⠀⠀⡀⡀⠀⡀⠀⣀⡀⣠⠰⡢⣕⡕⣋⣎⡵⢥⣹⡣⢗⢌⡾⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠈⣷⢩⠮⡼⠴⡫⢞⡜⣵⢪⡳⣍⢝⢞⢮⡹⣄⠑⡥⢈⡆⢱⢈⣜⢵⢜⢭⡎⡳⢵⡭⢵⡭⡫⠺⣧⡛⡵⣑⠇⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠹⡪⣪⢳⣟⢏⣟⢼⡪⣗⠳⢵⡝⡮⣳⣛⡌⢒⢊⠆⣗⢱⡄⡹⣪⠗⡾⣕⡱⡺⣜⡳⠼⣝⣞⡵⣫⢎⡾⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢱⢕⠧⣝⣭⢵⢝⢮⠕⡯⡊⡧⠨⡎⡽⣐⠣⡙⣪⢧⡘⡆⢆⣜⠗⡼⡄⣍⠺⡠⡞⢔⠜⡥⠻⡮⡺⡅⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡣⢳⡔⡗⡑⠣⡃⠞⢕⠔⢄⢕⣻⠠⣻⣆⢏⡪⡾⢼⡂⡷⣝⠜⡵⡬⡂⢜⠕⢜⠄⠣⡨⢞⡕⣾⠂⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢢⢄⡩⡨⡈⠆⢩⠘⠄⠣⠈⢦⣻⠰⡱⣷⠱⣏⢗⣫⡳⣹⣝⡜⣹⢞⢔⢐⠉⡂⠑⢌⠂⢂⠕⢻⣧⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢸⡗⠪⡐⡈⢂⠅⡈⢄⢊⢄⠙⢮⣟⡵⡪⢞⡡⡫⢢⢓⡭⣞⣮⠷⡛⡤⣢⣼⣌⣪⣀⡣⣂⢔⠡⡹⢄⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢝⠩⢂⠄⡪⢀⣮⢮⡿⣿⣿⣿⣾⣦⢛⡱⢱⠌⢆⠕⢕⣜⣣⠭⣽⣿⣿⣻⣿⣿⡻⢯⡩⢂⡙⣯⢖⠌⡆⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡃⢒⢔⢔⠴⢂⠑⡾⣼⣿⣿⣾⢯⡻⡇⢌⢕⠡⡘⡎⢆⢪⡺⡢⣿⣫⡿⣿⢿⡳⠙⡂⢎⢊⡺⣵⢟⡼⡂⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⠑⠥⡻⡆⠢⡊⡐⠨⠱⢜⡉⢑⡡⠟⢙⣔⠣⡊⢌⠩⢒⠅⡯⣺⢇⢍⢂⢄⣒⢈⡆⣰⣖⡭⡾⡶⣟⡼⡭⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢕⢬⡛⢮⡤⣱⡘⡧⡑⡢⡩⢉⢄⠜⡸⢕⡕⢕⠑⡜⢅⢛⢆⣿⡘⣕⠢⠥⣤⢳⡼⣵⠳⣽⣻⣝⣿⣻⠎⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠢⣹⢎⠷⣮⡭⣙⡖⣳⡱⣍⠲⠠⠪⡊⢞⢎⠢⠁⢊⠄⡑⠘⢮⡳⣈⠣⣚⢐⠫⣾⣏⣿⢿⣮⣟⣾⠉⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠐⢌⢯⡻⡰⣯⣋⣝⣥⡝⢇⣨⠣⡑⢌⠮⢇⣐⣆⡐⣴⢨⣦⣵⢋⢖⢓⣑⠯⡞⢶⣾⣻⢟⣷⣟⡎⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠘⠰⡧⣽⣽⡻⣽⡳⢃⠞⣈⠦⢹⠔⡢⢅⣙⠋⢬⡏⡺⣙⡭⡺⣕⣕⣑⣋⡚⢥⣬⣵⣯⡵⠋⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢜⣮⢼⣛⡶⣖⡂⣊⠴⢤⠗⢖⢙⣌⣳⢿⢢⣕⢪⡟⣾⢵⣬⣧⣩⣙⡌⢧⣻⢯⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠫⡮⣛⣺⣭⡗⣨⣂⡵⢳⡛⣭⣫⡮⣳⣵⡻⣼⣳⢵⢯⣶⣵⣳⡽⡻⡽⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢯⣾⣛⢎⣵⡽⡷⣻⣟⡶⣿⣻⡵⣟⣽⣟⣿⡻⣞⢧⣳⠻⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠛⠝⠮⢏⢶⢧⣻⢝⣮⢟⣾⡳⣽⡯⡻⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠊⠋⠊⠙⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
console.log('%c' + khaos_img, "color:black; font-size: 12px; font-family: monospace; font-weight: bold;");