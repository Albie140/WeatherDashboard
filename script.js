$("#add-city").on("click", function (event) {
    event.preventDefault()
    var city = $(this).siblings("#weather-input").val();
    console.log(city);
    var apiKey = "3c0180d657759505946b8abbfc2f67b7"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey+ "&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            var city = response.name
            var windSpeed = response.wind.speed
            var humidity = response.main.humidity
            var temperature = response.main.temp
            

            console.log(city);
            console.log(windSpeed);
            console.log(humidity);
            console.log(temperature);

            $(".city").html("<h3>City: " + city + "</h3>")
            $(".temp").html("Temperature: " + temperature + "&deg")
            $(".windSpeed").html("Wind Speed: " + windSpeed)
            $(".humidity").html("Humidity: " + humidity)
            

            
uvIndex(response.coord.lon, response.coord.lat)
        })
})


// function forecast(){

// }


function uvIndex(long, lat) {
    var apiKey = "3c0180d657759505946b8abbfc2f67b7"
    var queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?&lat=" + lat + "&lon=" + long + "&appid=" + apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
var uv=response[0].value

            $(".uvIndex").html("UV Index: " + uv )
        })
}
