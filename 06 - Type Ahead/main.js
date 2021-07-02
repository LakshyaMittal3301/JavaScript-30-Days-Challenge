const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
.then((response)=> response.json())
.then((data)=>cities.push(...data))

const cityInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions")
cityInput.addEventListener("input", searchCity);

function findMacthes(wordToMatch, cities){
    const regex = new RegExp(wordToMatch, `gi`);
    return cities.filter(place => place.city.match(regex) || place.state.match(regex) );
}

function searchCity(event){
    const listOfCities = findMacthes(this.value, cities);
    let output = "";
    const regex = new RegExp(`${this.value}`, "gi");
    listOfCities.forEach((place) => {
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        output += `
        <li>
        <span class="name">${cityName}, ${stateName}</span> 
        <span class="population">${numberWithCommas(place.population)}</span></li>
        `
    });
    suggestions.innerHTML = output;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}