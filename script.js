let weather = {
    "apiKey": "4fb00fc4e626764db50e2ea3b5fe5a50",
    fetchWeather: function (city) {
        fetch(
          href= "https://api.openweathermap.org/data/2.5/weather?q=" 
          + city
          "&units=metrics&lat=&lon=&appid=" +
          this.apiKey, 
        ) 
        .then(response => {
            if (!response.ok) {
                alert("Weather Not Found. Try again");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/ " + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed" + speed + " mph";
        document.body.style.backgroundImage = "url("
    },
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
    
