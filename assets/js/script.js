// function getLocalStorage() {
//   return JSON.parse(localStorage.getItem("userInfo")) || [];
// };


// ON PAGE LOAD, TIME & SAVED ITEM DISPLAY
// function init() {
//   setInterval(function() {
//     $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
//   }, 1000);

//   $('.card').each(function() {
//     var timeBlock = parseInt($(this).attr("id").split("-")[1]);
//     $(this).children('.description').val(localStorage.getItem(timeBlock));
//   })
// }

// init();

var apiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

var cities = JSON.parse(localStorage.getItem('cities')) || [];

function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);
}

init();

function displayChosenCity(event) {  
  event.preventDefault();

  $("#feature-spot").empty();
    
  $("#weather-spot").empty();
  
  var cityName = $("#search-input").val().trim();
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
  // console.log(`You have searched for this city: ${cityName}`);

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)

      // <div class="card" style="width: 18rem;">
      //   <img src="..." class="card-img-top" alt="...">
      //   <div class="card-body">
      //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //   </div>
      // </div>

      var featureCard = $("<div class='card feature-card col-12 col-md-9'>");

      var dateDisplay = $('<h1>').text((dayjs()).format('D/M/YYYY'));    
      featureCard.append(dateDisplay);

      var featureImg = $('<img src="./assets/images/sunny-day.png" class="card-img-top" alt="Shining sun icon.">')
      featureCard.append(featureImg);

      var featureBody = $('<div class="card-body">')
      featureCard.append(featureBody);

      var temperature = data.list[0].main.temp;
      console.log(temperature);
      var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);
      featureBody.append(tempDisplay);

      var windSpeed = data.list[0].wind.speed;
      console.log(windSpeed);
      var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);
      featureBody.append(windDisplay);

      var humidity = data.list[0].main.humidity;
      console.log(humidity);
      var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);
      featureBody.append(humidDisplay);

      $('#feature-spot').prepend(featureCard);

      // for (var i = 0; i < 40; i += 8) { // parse the value of dt_txt
      for (var i = 0; i < 5; i += 1) {

        var day = i * 8;
        // var dayCounter = 0;
        // dayCounter ++;

        var weatherCard = $("<div class='card weather-card col-12 col-md-3'>");
          
        var dateDisplay = $('<h1>').text((dayjs()).add(i + 1, 'day').format('D/M/YYYY'));
        weatherCard.append(dateDisplay);

        var weatherImg = $('<img src="./assets/images/rainy-day.png" class="card-img-top" alt="Shining sun icon.">')
        weatherCard.append(weatherImg);

        var weatherBody = $('<div class="card-body">')
        weatherCard.append(weatherBody);
          
        var temperature = data.list[day].main.temp;          
        console.log(temperature);          
        var tempDisplay = $('<p>').text(`Temp: ${temperature}`);          
        weatherBody.append(tempDisplay);
          
        var windSpeed = data.list[day].wind.speed;          
        console.log(windSpeed);          
        var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);          
        weatherBody.append(windDisplay);
          
        var humidity = data.list[day].main.humidity;          
        console.log(humidity);          
        var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);          
        weatherBody.append(humidDisplay);
          
        $('#weather-spot').append(weatherCard);
          
      }        
    });      
};
    
function renderHistory() {
    
  $('#history-spot').empty();
    
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


   if (cities.includes(cityName)) {
    console.log("City already in list")
  } else {
    cities.push(cityName)
    console.log(cities)
    localStorage.setItem('cities', JSON.stringify(cities));
    console.log(cities)
  }
  // localStorage.setItem(cities, cityName);

  // function storeScore(userStat) {
//   var userInfo = getLocalStorage();
//   var userStat = {
//     name: nameInput.value.trim(),
//     highScore: scoreCount,
//   };

//   // console.log(userInfo);
//   userInfo.push(userStat);

//   var sortedScores = userInfo.sort(function (a, b) {
//     return b.highScore - a.highScore;
//   });
//   if (sortedScores.length > 10) {
//     sortedScores.pop();
//   }

//   localStorage.setItem("userInfo", JSON.stringify(sortedScores));
// };

    
  renderHistory();
});
    
$(document).on("click", "#search-btn", displayChosenCity);