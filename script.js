$(document).ready(function(){

    $("#add-city").on("click", function () {
        console.log("Clicked");
    var weatherInput =$("#weather-input").val(); 
    var queryURL = "",
    if (weatherInput !== ""){
        $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?id=" +weatherInput+ "990c20e7f9d2676532491d7e451773d2" + "&appid=" + "&units=imperial",
                method: "GET",
        })
        console.log(data)

    } else {
        $("#error").html("Please choose a city");
    }
    })
    .then(function(){
        console.log ($this);
    })
})


    //Ajax call in seacrh box/onclick

// $.ajax({
// url: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=3c0180d657759505946b8abbfc2f67b7",
// method:"GET"
// })
// .then(function(weatherData) {
//     console.log(weatherData);
// })

//Display call in main card area.
// var city = weatherData.name;
// var windSpeed = weatherData.wind.windSpeed;
// var humidity = weatherData.main.humidity;
// var temp = weather.data.main.temp

