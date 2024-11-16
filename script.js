// Cambiar el color de fondo al hacer clic en el botón
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    // Generar un color aleatorio
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

document.addEventListener("DOMContentLoaded", () => {
    const argentinaCoords = [-38.4161, -63.6167]; // Coordenadas de Argentina

    const map = L.map("map").setView(argentinaCoords, 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(argentinaCoords)
        .addTo(map)
        .bindPopup("¡Aquí está Argentina!")
        .openPopup();
});


