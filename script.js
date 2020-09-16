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
            addButtons()
        
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

            var temperature1 = response.daily[1].temp.max
            var windSpeed1 = response.daily[1].wind_speed
            var humidity1 =response.daily[1].humidity
            var uv1= response.daily[1].uvi
            var date = response.daily[1].dt

            console.log(temperature1);
            console.log(windSpeed1);
            console.log(humidity1);
            console.log(uv1);
           
            
            for(var i=0; i<response.daily.length; i++){
                var temperature = $(`<p>Temperature: ${response.daily[i].temp.max}</p>`);
                var windSpeed = $(`<p>Wind Speed: ${response.daily[i].wind_speed}</p>`);
                var humidity = $(`<p>Humidity: ${response.daily[i].humidity}</p>`);
                var uv = $(`<p>UV: ${response.daily[i].uvi}</p>`);
                // var date = $(`<p>Date: ${response.daily[i].dt}</p>`);
                $(`.card-body${i}`).append(temperature)
                $(`.card-body${i}`).append(windSpeed)
                $(`.card-body${i}`).append(humidity)
                $(`.card-body${i}`).append(uv)
                // $(`.card-body${i}`).append(date)
             }
           
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

function addButtons(city){

    var city = $("#weather-input").val();
    var buttonList =$(".cityList");
    var newCityButton = $("<button>");
    newCityButton.text(city);
    newCityButton.addClass(city);
    buttonList.append(newCityButton);
//    console.log(city)

 };