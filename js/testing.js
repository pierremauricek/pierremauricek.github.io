const btn = document.getElementById("settings");
const windowEl = document.getElementById("myWindow");
const header = document.getElementById("windowHeader");
const closeBtn = document.getElementById("closeWindowBtn");

btn.addEventListener("click", () => {
  windowEl.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  windowEl.style.display = "none";
});

// Drag functionality
let offsetX = 0, offsetY = 0, isDragging = false;

header.addEventListener("mousedown", (e) => {
  // Prevent drag when clicking the close button
  if (e.target === closeBtn) return;

  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    windowEl.style.left = (e.clientX - offsetX) + "px";
    windowEl.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});