const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

console.log(cities)

function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, 'gi');
  const matchedCities = cities.filter(place => place.city.match(regex) || place.state.match(regex));

  //Calculate and sort by distance
  const sortedCities = matchedCities.sort((a, b) => {
    const aDistance = getDistance(a.latitude, a.longitude);
    const bDistance = getDistance(b.latitude, b.longitude);
    return aDistance - bDistance;
  });

  return sortedCities;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); 
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
      <span class="distance">${getDistance(place.latitude, place.longitude).toFixed(2)} km away</span>
    </li> `;
  }).join('');
  suggestions.innerHTML = html;
}

function getDistance(lat2, lon2) {
  const lat1 = 43.466667; // My latitude
  const lon1 =  -80.516670; // My longitude

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);