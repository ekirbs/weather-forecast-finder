function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

}

init();

var apiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

var cities = [];

function displayChosenCity(event) {
  
  event.preventDefault();
  
  var cityName = $("#search-input").val().trim();

  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}$lang=${lang}`;

  console.log(`You have searched for this city: ${cityName}`);

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

         // create a new div to hold the movie
        var featureCard = $("<div class='feature-card'>");

        var dateDisplay = $('<h1>').text((dayjs()).format('D/M/YYYY'));
    
        featureCard.append(dateDisplay);



        var temperature = data.list[0].main.temp;

        console.log(temperature);

        var tempDisplay = $('<p>').text(`Temp: ${temperature}`);

        featureCard.append(tempDisplay);



        var windSpeed = data.list[0].wind.speed;

        console.log(windSpeed);

        var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);

        featureCard.append(windDisplay);



        var humidity = data.list[0].main.humidity;

        console.log(humidity);

        var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);

        featureCard.append(humidDisplay);

        $('#feature-spot').prepend(featureCard);

        for (var i = 0; i < 40; i + 8) { // parse the value of dt_txt

          var weatherCard = $("<div class='weather-card'>");
          
          var dateDisplay = $('<h1>').text((dayjs()).add(1, 'day').format('D/M/YYYY'));
          
          weatherCard.append(dateDisplay);
          
          var temperature = data.list[i].main.temp;
          
          console.log(temperature);
          
          var tempDisplay = $('<p>').text(`Temp: ${temperature}`);
          
          weatherCard.append(tempDisplay);
          
          var windSpeed = data.list[i].wind.speed;
          
          console.log(windSpeed);
          
          var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);
          
          weatherCard.append(windDisplay);
          
          var humidity = data.list[i].main.humidity;
          
          console.log(humidity);
          
          var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);
          
          weatherCard.append(humidDisplay);
          
          $('#weather-spot').append(weatherCard);
          
        }

      });

    };


        // var featureCard = $("<div class='feature-card'>");

        // var dateDisplay = $('<h1>').text((dayjs()).format('D/M/YYYY'));
    
        // featureCard.append(dateDisplay);



        // var temperature = data.list[0].main.temp;

        // console.log(temperature);

        // var tempDisplay = $('<p>').text(`Temp: ${temperature}`);

        // featureCard.append(tempDisplay);



        // var windSpeed = data.list[0].wind.speed;

        // console.log(windSpeed);

        // var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);

        // featureCard.append(windDisplay);



        // var humidity = data.list[0].main.humidity;

        // console.log(humidity);

        // var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);

        // featureCard.append(humidDisplay);

        // $('#feature-spot').append(featureCard);


// function displayFiveDay(event) {

//   event.preventDefault();

// // var units = 'imperial';
// // var lang = 'en';
//   var cityName = $("#search-input").val().trim();
//   var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

//   console.log(`You have searched for this city: ${cityName}`);

//   fetch(apiURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {

//         console.log(data)


//         for (var i = 0; i < 40; i + 8) { // parse the value of dt_txt

// var weatherCard = $("<div class='weather-card'>");

// var dateDisplay = $('<h1>').text((dayjs()).add(1, 'day').format('D/M/YYYY'));

// weatherCard.append(dateDisplay);

// var temperature = data.list[i].main.temp;

// console.log(temperature);

// var tempDisplay = $('<p>').text(`Temp: ${temperature}`);

// weatherCard.append(tempDisplay);

// var windSpeed = data.list[i].wind.speed;

// console.log(windSpeed);

// var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);

// weatherCard.append(windDisplay);

// var humidity = data.list[i].main.humidity;

// console.log(humidity);

// var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);

// weatherCard.append(humidDisplay);

// $('#weather-spot').append(weatherCard);

//       }
          
//     });

// };


function renderHistory() {
  $("#feature-spot").empty();

  $("#weather-spot").empty();

  $('#history-spot');

  for (i = 0; i < cities.length; i++) {

    var histButton = $('<button>');

    histButton.addClass('hist-btn');

    histButton.attr('data-name', cities[i]);

    histButton.text(cities[i]);

    $('#history-spot').append(histButton);

  }
}

$("#search-btn").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  var cityName = $("#search-input").val().trim();

  cities.push(cityName);

  renderHistory();
});

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
$(document).on("click", "#search-btn", displayChosenCity);
// $(document).on("click", "#search-btn", displayFiveDay);



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


// let (var i = 0; i < 5; i++) {
//   fiveData.list[(i * 8)]


// }


// console.log(fiveData)
//         for (let i = 0; i < 5; i++) {
//             console.log(card[i])
//             console.log(fiveData.list[(i * 8)])


//           var weatherCard = $("<div class='weather-card'>");



//         var temperature = data.list[i].main.temp
//         console.log(temperature);

//         var tempDisplay = $('<p>');

//         tempDisplay.addClass('day-card');

//         tempDisplay.attr('data-name', temperature[i]);

//         tempDisplay.text(temperature[i]);

//         weatherCard.append(tempDisplay);

//         var windSpeed = data.list[i].wind.speed;
          
//         console.log(windSpeed);

//         var windDisplay = $('<p>');

//         windDisplay.addClass('day-card');

//         windDisplay.attr('data-name', windSpeed[i]);

//         windDisplay.text(windSpeed[i]);

//         weatherCard.append(windDisplay);


          
//         var humidity = data.list[i].main.humidity;
          
//         console.log(humidity);

//         var humidDisplay = $('<p>');

//         humidDisplay.addClass('day-card');

//         humidDisplay.attr('data-name', humidity[i]);

//         humidDisplay.text(humidity[i]);

//         weatherCard.append(humidDisplay);

//         $('#weather-spot').prepend(weatherCard);

 


// function displayFiveDay(event) {

//   event.preventDefault();

// // var units = 'imperial';
// // var lang = 'en';
//   var cityName = $("#search-input").val().trim();
//   var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

//   console.log(`You have searched for this city: ${cityName}`);

//   fetch(apiURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {

//         console.log(data)


//         for (var i = 0; i < 40; i + 8) { // parse the value of dt_txt

// var weatherCard = $("<div class='weather-card'>");

// var dateDisplay = $('<h1>').text((dayjs()).add(1, 'day').format('D/M/YYYY'));

// weatherCard.append(dateDisplay);

// var temperature = data.list[i].main.temp;

// console.log(temperature);

// var tempDisplay = $('<p>').text(`Temp: ${temperature}`);

// weatherCard.append(tempDisplay);

// var windSpeed = data.list[i].wind.speed;

// console.log(windSpeed);

// var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);

// weatherCard.append(windDisplay);

// var humidity = data.list[i].main.humidity;

// console.log(humidity);

// var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);

// weatherCard.append(humidDisplay);

// $('#weather-spot').append(weatherCard);

//       }
          
//     });

// };

