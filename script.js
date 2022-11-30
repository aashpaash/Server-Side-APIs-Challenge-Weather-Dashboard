let weather = {
    "apiKey": "4fb00fc4e626764db50e2ea3b5fe5a50",
    fetchWeather: function () {
        fetch(
          href= "https://api.openweathermap.org/data/2.5/weather?lat=45.516020&lon=-122.681430&appid=4fb00fc4e626764db50e2ea3b5fe5a50", 
        )
           .then(response => response.json())
           .then((data) => console.log(data)); 
}
}