var apiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

  renderHistory();
};

init();

function displayChosenCity() {  // removed event focus
  // event.preventDefault();

  $("#feature-spot").empty();

  // $('#daily-section').empty();

  var cityName = $("#search-input").val().trim();
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var featureCard = $("<div class='card feature-card'>");
        
      var dateDisplay = $('<h1>').text((dayjs()).format('M/D/YYYY'));    
      featureCard.append(dateDisplay);
        
      var icon = data.list[0].weather[0].icon
      var featureImg = $(`<div id="icon"><img id="wicon" src="${icon}" alt="Weather icon">`)
      // var featureImg = $('<img src="./assets/images/sunny-day.png" class="card-img-top" alt="Shining sun icon.">');
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
  
        var weatherArticle = $(`<article id="article${count}" class="card card-alt zoom">`);
  
        // var weatherDiv = $('<div class="container weather-spot">');
  
        // var weatherCard = $("<div class='weather-card'>");
          
        var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
        $(`#article${count}`).append(dateDisplay);
          
        var icon = data.list[day + 1].weather[0].icon
        // var weatherImg = $('<img src="./assets/images/rainy-day.png" class="card-img-top" alt="Rainy clouds icon.">')
        $(`#article${count}`).append(weatherImg);
  
        var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
        $(`#article${count}`).append(weatherBody);
          
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p>').text(`Temp: ${temperature}`);          
        $(`weatherBody${count}`).append(tempDisplay);
          
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);          
        $(`weatherBody${count}`).append(windDisplay);
          
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);          
        $(`weatherBody${count}`).append(humidDisplay);
          
        // $(`#article${count}`).append(weatherCard);
        // $('.card-alt').append(weatherDiv);
        $('#daily-section').append(weatherArticle);
          
      }        

    })
};

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("cities")) || [];
};

function renderHistory() {
      
  $('#history-spot').empty();
  
  var cities = JSON.parse(localStorage.getItem('cities')) || [];    
    
  for (i = 0; i < cities.length; i++) {
      
    var histButton = $('<button class="hist-btn btn btn-outline-dark">');
      
    histButton.addClass('btn hist-btn');
      
    histButton.attr('data-name', cities[i]);
      
    histButton.text(cities[i]);
      
    $('#history-spot').append(histButton);
      
  }
};

$('#search-btn').on('click', function (event) {
          
  event.preventDefault();
        
  var cities = getLocalStorage();
  
  console.log(cities);
 
  var cities = getLocalStorage();
  console.log(cities);
  var cityName = $("#search-input").val().trim();
  console.log(cityName);
  
  if (cities.includes(cityName)) {
    console.log("already chosen");
  } else {
    cities.push(cityName);
    console.log(cities);
    
    if (cities.length > 5) {
      cities.sort();
    };

    localStorage.setItem("cities", JSON.stringify(cities));
  };
  
  displayChosenCity();
  renderHistory();
})

$(document).on('click', '.hist-btn', displayChosenCity);