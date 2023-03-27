const apiKey = '7d6e84bf8a0889791063ccb6a9e4758f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
//https://api.openweathermap.org/data/2.5/weather?q=Argentina&appid=7d6e84bf8a0889791063ccb6a9e4758f&units=metric

async function checkWeather(city) {
    const repsonse = await fetch(apiUrl+"&appid="+apiKey+"&q="+city);
    var data = await repsonse.json(); //convierte la respuesta en un objeto json
    console.log(data); 
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp+"°C";
    /* document.querySelector(".temp-min").innerText = data.main.temp_min+"°C";
    document.querySelector(".temp-max").innerText = data.main.temp_max+"°C" */
    document.querySelector(".humidity").innerText = data.main.humidity+"%";
    document.querySelector(".wind").innerText = data.wind.speed+" km/h";
}

const searchBox = document.querySelector('.search input');
const searchBtn= document.querySelector('.search button');

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)   
});

