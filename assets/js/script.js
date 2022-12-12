// GLOBAL VARIABLES
var apiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

// TIME & SEARCH HISTORY DISPLAY FUNCTION ON PAGE LOAD
function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

  renderHistory();
};

init();

// WEATHER DISPLAY FUNCTION
function displayChosenCity() {

  $("#feature-spot").empty();

  $('#weather-spot').empty();

  var cityName = $("#search-input").val().trim();
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var featureCard = $("<div class='card feature-card zoom'>");

      var name = data.city.name;
      var city = $('<h1>').text(name);
      featureCard.append(city);
        
      var dateDisplay = $('<h2>').text((dayjs()).format('M/D/YYYY'));    
      featureCard.append(dateDisplay);
        
      var featureImg = $(`<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" id="icon">`)
      featureCard.append(featureImg);
        
      var featureBody = $('<div class="card-body">');
      featureCard.append(featureBody);
        
      var temperature = data.list[0].main.temp;      
      var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);
      featureBody.append(tempDisplay);
        
      var windSpeed = data.list[0].wind.speed;      
      var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);
      featureBody.append(windDisplay);
        
      var humidity = data.list[0].main.humidity;      
      var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);
      featureBody.append(humidDisplay);
     
      $('#feature-spot').prepend(featureCard);

      // 5 DAY WEATHER DISPLAY LOOP
      for (var i = 0; i < 5; i += 1) {
          
        var day = i * 8;
        var count = i;
        console.log(day, count);
  
        var weatherArticle = $(`<article id="article${count}" class="card card-alt zoom">`);
      
        $('#weather-spot').append(weatherArticle);
  
        var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
        $(`#article${count}`).append(dateDisplay);
       
        var weatherImg = $(`<img src="http://openweathermap.org/img/w/${data.list[day + 1].weather[0].icon}.png" id="icon">`)
        $(`#article${count}`).append(weatherImg);
  
        var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
        $(`#article${count}`).append(weatherBody);
          
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);          
        $(`#weatherBody${count}`).append(tempDisplay);
          
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);          
        $(`#weatherBody${count}`).append(windDisplay);
          
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);          
        $(`#weatherBody${count}`).append(humidDisplay);
            
      }        
    })
};

// WEATHER DISPLAY FROM HISTORY FUNCTION
function displayChosenCityFromHistory() {

  $("#feature-spot").empty();

  $('#weather-spot').empty();

  var cityName = $(this).attr('data-name');

  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var featureCard = $("<div class='card feature-card zoom'>");

      var name = data.city.name;
      var city = $('<h1>').text(name);
      featureCard.append(city);
        
      var dateDisplay = $('<h2>').text((dayjs()).format('M/D/YYYY'));    
      featureCard.append(dateDisplay);
        
      var featureImg = $(`<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" id="icon">`)
      featureCard.append(featureImg);
        
      var featureBody = $('<div class="card-body">');
      featureCard.append(featureBody);
        
      var temperature = data.list[0].main.temp;      
      var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);
      featureBody.append(tempDisplay);
        
      var windSpeed = data.list[0].wind.speed;      
      var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);
      featureBody.append(windDisplay);
        
      var humidity = data.list[0].main.humidity;      
      var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);
      featureBody.append(humidDisplay);
        
      $('#feature-spot').prepend(featureCard);

      for (var i = 0; i < 5; i += 1) {
          
        var day = i * 8;
        var count = i;
        console.log(day, count);
  
        var weatherArticle = $(`<div id="article${count}" class="card card-alt zoom">`);
        console.log(weatherArticle);
        $('#weather-spot').append(weatherArticle);
  
        var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
        $(`#article${count}`).append(dateDisplay);
        console.log(dateDisplay);
        
        var weatherImg = $(`<img src="http://openweathermap.org/img/w/${data.list[day + 1].weather[0].icon}.png" id="icon">`)
        $(`#article${count}`).append(weatherImg);
        console.log(weatherImg);
  
        var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
        $(`#article${count}`).append(weatherBody);
        console.log(weatherBody);
          
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);          
        $(`#weatherBody${count}`).append(tempDisplay);
        console.log( temperature, tempDisplay);
          
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);          
        $(`#weatherBody${count}`).append(windDisplay);
        console.log (windSpeed, windDisplay);
          
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);          
        $(`#weatherBody${count}`).append(humidDisplay);
        console.log(humidity, humidDisplay);
          
      }        

    })
};

// GET LOCALSTORAGE OF SEARCH HISTORY FUNCTION
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("cities")) || [];
};

// RENDER SEARCH HISTORY FUNCTION
function renderHistory() {
      
  $('#history-spot').empty();

  $('#feature-spot').empty();

  $('#weather-spot').empty();

  var cities = JSON.parse(localStorage.getItem('cities')) || [];    
    
  for (i = 0; i < cities.length; i++) {
      
    var histButton = $('<button class="hist-btn btn btn-outline-dark">');
      
    histButton.addClass('btn hist-btn');
      
    histButton.attr('data-name', cities[i]);
      
    histButton.text(cities[i]);
      
    $('#history-spot').append(histButton);
      
  }
};

// ON BUTTON CLICK, ADD SEARCHED CITIES TO HISTORY AND RENDER HISTORY & WEATHER
$('#search-btn').on('click', function (event) {
          
  event.preventDefault();
        
  var cities = getLocalStorage();
  
  console.log(cities);
 
  var cityName = $("#search-input").val().trim();
  console.log(cityName);

  if(cityName === "") {
    alert('Please choose a city');
  } else {

    if (cities.includes(cityName)) {
      console.log("already chosen");
    } else {
      cities.push(cityName);
      console.log(cities);
    
      if (cities.length > 5) {  
        cities.shift();
      };

    localStorage.setItem("cities", JSON.stringify(cities));
    }
  };
  renderHistory();
  displayChosenCity();
})

// WEATHER DISPLAY WHEN SEARCH HISTORY IS CLICKED
$(document).on('click', '.hist-btn', displayChosenCityFromHistory);