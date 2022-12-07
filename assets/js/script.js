// `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

var API_KEY =  '3044316f6126db93462603440b6cd43c';

var API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${API_KEY}`;

// var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

var cities = [];


function displayChosenCity() {

  var cityName = $(this).attr('data-name');

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  console.log(`You have searched for this city: ${cityName}`);

  // var movie = $(this).attr('data-name');

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // return response.json();
  })

};

// function fiveDay() {
//   fetch({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     return response.json();
//   }).then(function(fiveDayForecast) {
    
//   })

// };















('#search-location').on('click', function(event) {
  event.preventDefault();
  console.log('this clicked');
  // create a variable to grab the user VALUE fromt the input box
  var cityName = $('#search-location').val().trim();
  // add a movie to my array
  cities.push(cityName);
  // every time we add a movie to the array we want to rerender the buttons
  displayChosenCity();

});

// $('#search-city').on('click', function(event) {
//   event.preventDefault;

//   var city = $('#city').val().trim();

//   cities.push(city);

//   displayCity();
//   displaySearchHistory();
// })

$(document).on('click', '#search-location #search-history', displayChosenCity)

// function render() {
//   displayCity();
//   displaySearchHistory();
// };