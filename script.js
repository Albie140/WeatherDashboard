//Ajax call in seacrh box/onclick
var apiKey="3c0180d657759505946b8abbfc2f67b7"
$.ajax({
url: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=3c0180d657759505946b8abbfc2f67b7",
method:"GET"
})
.then(function(weatherData) {
    console.log(weatherData);
})
//Display call in main card area.
// var city = weatherData.name;
// var windSpeed = weatherData.wind.windSpeed;
// var humidity = weatherData.main.humidity;
// var temp = weather.data.main.temp

//Future forecast noted at the bottom in 5 cards. i per day