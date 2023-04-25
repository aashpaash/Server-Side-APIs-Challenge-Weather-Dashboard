//Variables
// API data from Open Weather Map
var APIKey = "4fb00fc4e626764db50e2ea3b5fe5a50";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast";
var inputValue = input.value;
var city;



// Weather data Document Object Model - DOM
var button = document.querySelector('.search-bar')
var weather = document.querySelector('.weather')
var form = document.querySelector('.input.search-bar')

// Fetch Weather from Requested City

//fetch(queryURL)

document.querySelector(".search-bar").addEventListener("click", function () {
    weather.search();
});


// Display Weather Results

form.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue+'&appid=4fb00fc4e626764db50e2ea3b5fe5a50')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Weather Not Found. Please Search Again."))
})

// 

let apiURL = '${queryURL}?q${city}&appid=${APIKey}&units=metric';

axios.get(apiURL)
    .then(response => {

    )

    function displayWeather({
        temp: forecast,main,temp,
        humidity: forecast,main,humidity,
        windSpeed: forecast,wind,speed,
        icon: forecast,weather,[0]:icon
    }) 
    
    {
        var city = response.resolvedLocation;
        var speed = response.data.windSpeed;
        var days = response.days;
        var icon = response.data.weather[0];
        console.log("Weather Found:"+tempmax);
        for (var i = 0; i < days; i++) {
            
            console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
        }
    };
;

// Weather icons from open weather map
var iconWeather = 'https://openweathermap.org/img/w/${weather.weather[0].icon}.png';


//Store Data to Local Storage
var searchHistory = JSON.parse(localStorage.setItem('search_history')) || [];
if (searchHistory.indexof(inputValue) === -1)
window.localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
