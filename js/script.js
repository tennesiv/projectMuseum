// Кнопка "Наверх"
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement('button');
  btn.innerText = "Наверх";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "15px 25px";
  btn.style.fontSize = "1rem";
  btn.style.borderRadius = "50px";
  btn.style.border = "none";
  btn.style.backgroundColor = "#f39c12";
  btn.style.color = "#fff";
  btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  btn.style.display = "none";
  btn.style.transition = "all 0.3s ease";
  btn.style.zIndex = "9999";

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
