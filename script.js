//Fetch Weather
let weather = {
    // "apiKey": "4fb00fc4e626764db50e2ea3b5fe5a50",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=4fb00fc4e626764db50e2ea3b5fe5a50") 
        .then(response => {
            if (!response.ok) {
                alert("Weather Not Found. Try again");
            }
            return response.json();
        }}
        .then(response => {
            ((data) => response.displayWeather)
        }), 
        return: response.json(),
    };

    function displayWeather(response) {
        var location = response.resolvedLocation;
        var speed = response.data.windSpeed;
        var days = response.days;
        var icon = response.data.data.weather[0];
        console.log("Weather Found:"+tempmax);
        for (var i = 0; i < days; i++) {
            
            console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
        }
    }
        //const {icon, description} = data.weather[0];
        //const {speed} = data.wind;
       
    {
        document.querySelector(".city").innerText = "Weather in" + data.weather[0].name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/ " + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed" + speed + " mph";
        document.body.style.backgroundImage = "url("
    }
       
  
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").Value);
    },
};

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

