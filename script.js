$("#currentDate").html(moment().format("LL"))
$("#add-city").on("click", function (event) {
    event.preventDefault()
    var city = $("#weather-input").val();
    console.log(city);
    var apiKey = "3c0180d657759505946b8abbfc2f67b7"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var city = response.name;
            var windSpeed = response.wind.speed;
            var humidity = response.main.humidity;
            var temperature = response.main.temp;

            console.log(city);
            console.log(windSpeed);
            console.log(humidity);
            console.log(temperature);

            $(".city").html("<h4>City: " + city + "</h4>");
            $(".temp").html("Temperature: " + temperature + "&deg");
            $(".windSpeed").html("Wind Speed: " + windSpeed);
            $(".humidity").html("Humidity: " + humidity);
            
         
            uvIndex(response.coord.lon, response.coord.lat)
            forecast(response.coord.lon, response.coord.lat)
            
        })
})

function forecast(long, lat) {
    var apiKey = "3c0180d657759505946b8abbfc2f67b7";
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat+ "&lon=" + long+ "&exclude=hourly,minutely,current&appid=" + apiKey +"&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            var temperature1 = response.daily[0].temp
            var windSpeed1 = response.daily[0].wind_speed
            var humidity1 =response.daily[0].humidity
            var uv1= response.daily[0].uvi

            $(".forecast").html("Temp: " + temperature1);
            $(".container-fluid forecast").html("Wind Speed: " + windSpeed1);
            $(".container-fluid forecast").html("Humidity: " + humidity1);
            $(".container-fluid forecast").html("UV: " + uv1);

            var newDiv = $("<div>");
            newDiv.html("Temp: " + temperature1);
            $(".container-fluid forecast").append(newDiv);
            console.log(newDiv)
        })
}

function uvIndex(long, lat) {
    var apiKey = "3c0180d657759505946b8abbfc2f67b7";
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" + apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // console.log(response)
            var uv = response.daily[0].uvi

            $(".uvIndex").html("UV Index: " + uv)
        })
}

// var search = ""
// if(localStorage.getItem("search") !== null){
//     var searchHistory = localStorage.getItem("search");
//     var searchArray = searchHistory.split();
//     $("#previous-search").empty();
//         for (var i = 0; i<searchArray.length; i++){
// $("#previous-search").append("<li>" + searchArray[i] + "</li>")
//         }
        
// }