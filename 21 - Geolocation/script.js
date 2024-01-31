const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latitude = document.querySelector('.latitude-value');
const longitude = document.querySelector('.longitude-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
}, (err) => {
    console.error(err);
});