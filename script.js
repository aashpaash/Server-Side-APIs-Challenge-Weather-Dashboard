//Variables
// API data from Open Weather Map
var APIKey = "4fb00fc4e626764db50e2ea3b5fe5a50";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast";
var city;

// Weather data Document Object Model - DOM
var button = document.querySelector('.search-bar');
var weather = document.querySelector('.weather');
var form = document.querySelector('.input.search-bar');

// Fetch Weather from Requested City
function getWeather(inputValue) {
fetch(https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${APIKey})
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(err => alert("Weather Not Found. Please Search Again."));
}

document.querySelector(".search-bar").addEventListener("click", function () {
var inputValue = document.querySelector(".input").value;
getWeather(inputValue);
});

// Display Weather Results
form.addEventListener('submit', function(e) {
e.preventDefault();
var inputValue = document.querySelector(".input").value;
fetch(https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${APIKey}&units=metric)
.then(response => response.json())
.then(data => {
console.log(data);
// call a function to display weather data on the DOM here
})
.catch(err => alert("Weather Not Found. Please Search Again."))
});

// Weather icons from open weather map
var iconWeather = https://openweathermap.org/img/w/${weather.weather[0].icon}.png;

// Store Data to Local Storage
var searchHistory = JSON.parse(localStorage.getItem('search_history')) || [];
if (searchHistory.indexOf(inputValue) === -1) {
searchHistory.push(inputValue);
window.localStorage.setItem("search_history", JSON.stringify(searchHistory));
}