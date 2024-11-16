// Cambiar el color de fondo al hacer clic en el botón
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    // Generar un color aleatorio
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

function initMap() {
    const argentina = { lat: -38.4161, lng: -63.6167 }; // Coordenadas de Argentina
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: argentina,
    });

    new google.maps.Marker({
        position: argentina,
        map: map,
        title: "Argentina",
    });
}

