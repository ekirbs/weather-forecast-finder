var apiKey =  '3044316f6126db93462603440b6cd43c';

var cities = [];

function displayChosenCity() {

  var cityName = $('#search-input').val().trim();

  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`

  console.log(`You have searched for this city: ${cityName}`);

  $.ajax({
    url: apiURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    return response.json();
  }).then(function(data) {

    var temperature = data.main.temp;
    
    console.log(temperature);
    
    var windSpeed = data.wind.speed;
    
    console.log(windSpeed);
    
    var humidity = data.main.humidity;
    
    console.log(humidity);

  })
  
};

function renderCards() {

  $('#feature-view').empty();

  $('week-view')
}

$('#search-btn').on('click', function(event) {
  event.preventDefault();
  console.log('button is working');

  var cityName = $('#search-input').val().trim();

  cities.push(cityName);
  
  // renderCards();
});

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
$(document).on('click', '#search-btn', displayChosenCity);


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