let weather = {
    "apiKey": "4fb00fc4e626764db50e2ea3b5fe5a50",
    fetchWeather: function () {
        fetch(
          href= "https://api.openweathermap.org/data/2.5/weather?lat=45.516020&lon=-122.681430&appid=4fb00fc4e626764db50e2ea3b5fe5a50", 
        ) 
        .then(response => response.json())
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
    }
};
