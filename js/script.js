// кнопка "наверх"
document.addEventListener("DOMContentloaded", () => {
	const btn = document.createElement('button');
	btn.innerText = "Наверх";
	btn.style.position = "fixed";
	btn.style.botton = "20px";
	btn.style.right = "20px";
	btn.style.padding = "10px 20px";
	btn.style.borderRadius = "8px";
	btn.style.border = "none";
	btn.style.backgroundColor = "#f39c12";
	btn.style.color = "fff";
	btn.style.cursor = "pointer";
	btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
	btn.style.display = "none";
});
	