import { savefarmacia } from "./firebase.js";

let mapform = L.map('MapForm').setView([-19.039777, -65.256998], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapform);

let marker = L.marker([-19.039777, -65.256998]).addTo(mapform);

let data = {};

mapform.on('click', function(e) {
    marker.setLatLng(e.latlng);
    console.log(e.latlng);
});

const form = document.getElementById('formfarmacia');

formfarmacia.addEventListener('submit', async (e) => {
    e.preventDefault();
    data.nombre = form.nombre.value;
    data.lat = marker.getLatLng().lat;
    data.lng = marker.getLatLng().lng;
    data.direccion = form.direccion.value;
    data.telefono = form.telefono.value;
    data.horario = form.horario.value;
    await savefarmacia(data);
    form.reset();
    marker.setLatLng([-19.039777, -65.256998]);
    mapform.setView([-19.039777, -65.256998], 17);
    // window.location.href = './index.html';
});

