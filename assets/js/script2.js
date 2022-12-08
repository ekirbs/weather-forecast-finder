var apiKey = "3044316f6126db93462603440b6cd43c";

var cities = [];
var searchHistory = [];

function displayChosenCity(event) {

  event.preventDefault();
  var cityName = $("#search-input").val().trim();
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  console.log(`You have searched for this city: ${cityName}`);

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

var temperature = data.list[0].main.temp

console.log(temperature);

var windSpeed = data.list[0].wind.speed;

console.log(windSpeed);

var humidity = data.list[0].main.humidity;

console.log(humidity);

});

}

  // $.ajax({
  //   url: apiURL,
  //   method: "GET",
  // })
  //   // .then(function (response) {
  //   //   console.log(response);
  //   //   return response.json();
  //   // })
  //   .then(function (response) {
  //     console.log(response)
  //     var temperature = response.list[0].main.temp
  //     // var temperature = response.main.temp;

  //     console.log(temperature);

  //     var windSpeed = response.list[0].wind.speed;

  //     console.log(windSpeed);

  //     var humidity = response.list[0].main.humidity;

  //     console.log(humidity);
  //   });

   

  // fetch({
  //   url: apiURL,
  // .then (function() {
  //   var res = response.body

  // })
  //   return response.json()
  // })
// }

function renderCards() {
  $("#feature-view").empty();

  $("week-view");
}

$("#search-btn").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  var cityName = $("#search-input").val().trim();

  cities.push(cityName);

  // renderCards();
});

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
$(document).on("click", "#search-btn", displayChosenCity);

// function fiveDay(cityName) {
// var units = 'imperial';
// var lang = 'en';
//   fetch({
//     url: apiURL
//   }).then(function(response) {
//     console.log(response);
//     return response.json();
//   }).then(function(fiveDayForecast) {

//   })

// };

// fetch(apiURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);

//     var temperature = data.main.temp;

//     console.log(temperature);

//     var windSpeed = data.wind.speed;

//     console.log(windSpeed);

//     var humidity = data.main.humidity;

//     console.log(humidity);
//   });

// $('#search-city').on('click', function(event) {
//   event.preventDefault;

//   var city = $('#city').val().trim();

//   cities.push(city);

//   displayCity();
//   displaySearchHistory();
// })

// function render() {
//   displayCity();
//   displaySearchHistory();
// };


// function getWeather() {
//   fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
// };

// function getWeather() {
//   fetch(API_URL)
//   .then(response => response.json())  // this '=>' is a promise.
//   .then(data => {
//     var {
//       sol_keys,
//       validity_checks,
//       ...solData
//     } = data
//     console.log(data);
//     console.log(solData);
//     Object.entries(solData).map([sol, data]) => {  
//       return {
//         sol: sol,
//       }
//     }
//   })
// };





        // $('#movie-view').prepend(movieDiv);


        // var temperature = data.list[0].main.temp

        // console.log(temperature);

        // var tempDisplay = $('<h3>');

        // tempDisplay.addClass('feature-temp');

        // tempDisplay.attr('data-name', temperature[0]);

        // tempDisplay.text(temperature[0]);

        // $('#weather-card').append(tempDisplay);



        // var windSpeed = data.list[0].wind.speed;

        // console.log(windSpeed);

        // var tempDisplay = $('<h3>');

        // tempDisplay.addClass('feature-wind');

        // tempDisplay.attr('data-name', temperature[0]);

        // tempDisplay.text(temperature[0]);

        // $('#weather-card').append(tempDisplay);



        // var humidity = data.list[0].main.humidity;

        // console.log(humidity);

        // var tempDisplay = $('<h3>');

        // tempDisplay.addClass('feature-humid');

        // tempDisplay.attr('data-name', temperature[0]);

        // tempDisplay.text(temperature[0]);

        // $('#weather-card').append(tempDisplay);

