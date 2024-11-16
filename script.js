// Cambiar el color de fondo al hacer clic en el botón
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    // Generar un color aleatorio
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});
