import { getfarmacia } from './firebase.js';

window.addEventListener('DOMContentLoaded', async () => {
    const data = await getfarmacia();

    let map = L.map('map').setView([-19.039777, -65.256998], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([-19.039777, -65.256998]).addTo(map);

    data.forEach((farmacia) => {
        L.marker([farmacia.lat, farmacia.lng]).addTo(map).bindPopup(farmacia.nombre + '<br>' + farmacia.horario + '<br>' + farmacia.direccion + '<br>' + farmacia.telefono);
    }); 

});

