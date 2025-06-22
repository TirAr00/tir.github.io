// Typing effect
const texts = ["Modder", "Web Developer", "Editor", "Bot Maker"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");

  if (!isDeleting && j <= texts[i].length) {
    currentText = texts[i].substring(0, j++);
  } else if (isDeleting && j > 0) {
    currentText = texts[i].substring(0, j--);
  }

  if (j === texts[i].length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  typingElement.textContent = currentText;
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Simple particle animation (canvas)
const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.5,
    dy: Math.random() * 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#38bdf8";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
