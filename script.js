var API_Key = "4fb00fc4e626764db50e2ea3b5fe5a50";
var Url = "https://api.openweathermap.org/data/2.5/forecast";
var city = "Paris, France"

// Fetch weather icons from open weather map
var iconWeather = 'https://openweathermap.org/img/w/${weather.weather[0].icon}.png';

// Fetch weather description


//Fetch Weather
// var weather = {
    url:"https://api.openweathermap.org/data/2.5/forecast",
    displayWeather: {
        q:city,
            appid: apiKey,
            units: "metric"
            
    },
    
    .then(response => {
            if (!response.ok) {
                alert("Weather Not Found. Try again");
            }
            return response.json();
//        }}
//        .then(response => {
//            ((data) => response.displayWeather)
//        }), 
//        data = response.json()
//    };
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

document.querySelector(".search-bar").addEventListener("click", function () {
    weather.search();
});

document
   .querySelector(".search-bar")
   .addEventListener("keyup", function (event) {
       if (event.key === "Enter") {
           weather.search();
    }
});

//Store Data

