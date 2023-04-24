
// Get API data from Open Weather Map
var API_Key = "4fb00fc4e626764db50e2ea3b5fe5a50";
var Url = "https://api.openweathermap.org/data/2.5/forecast";
var city = "Paris, France"

// Weather icons from open weather map
var iconWeather = 'https://openweathermap.org/img/w/${weather.weather[0].icon}.png';

// Weather data Document Object Model - DOM
var button = document.querySelector('.search-bar')
var weather = document.querySelector('.weather')


document.querySelector(".search-bar").addEventListener("click", function () {
    weather.search();
});



// Fetch weather description

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=4fb00fc4e626764db50e2ea3b5fe5a50')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Weather Not Found. Please Search Again."))
})

// 

let apiUrl = '${Url}?q${city}&appid=${API_KEY}&units=metric';

axios.get(apiUrl)
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


//Store Data

