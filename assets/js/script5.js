function getLocalStorage() {
  return JSON.parse(localStorage.getItem("cities")) || [];
};
  
var apiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

// var cities = [];
// var cities = localStorage.getItem('cities');
// console.log(cities);

function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

  renderHistory();
};

// getLocalStorage();
init();

function displayChosenCity(event) {  
  event.preventDefault();
  
  $("#feature-spot").empty();
  
  $("#weather-spot").empty();
  
  var cityName = $("#search-input").val().trim();
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
  
  fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
      var featureCard = $("<div class='card feature-card col-12 col-md-9'>");
      
      var dateDisplay = $('<h1>').text((dayjs()).format('D/M/YYYY'));    
      featureCard.append(dateDisplay);
      
      var featureImg = $('<img src="./assets/images/sunny-day.png" class="card-img-top" alt="Shining sun icon.">')
      featureCard.append(featureImg);
      
      var featureBody = $('<div class="card-body">')
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
        
        var weatherCard = $("<div class='card weather-card'>");
        
        var dateDisplay = $('<h1>').text((dayjs()).add(i + 1, 'day').format('D/M/YYYY'));
        weatherCard.append(dateDisplay);
        
        var weatherImg = $('<img src="./assets/images/rainy-day.png" class="card-img-top" alt="Rainy clouds icon.">')
        weatherCard.append(weatherImg);

        var weatherBody = $('<div class="card-body">')
        weatherCard.append(weatherBody);
        
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p>').text(`Temp: ${temperature}`);          
        weatherBody.append(tempDisplay);
        
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p>').text(`Wind Speed: ${windSpeed}`);          
        weatherBody.append(windDisplay);
        
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p>').text(`Humidity: ${humidity}`);          
        weatherBody.append(humidDisplay);
        
        $('#weather-spot').append(weatherCard);
        
      }        
    });      
  };
  
  function renderHistory() {
    
      $('#history-spot').empty();
    
      var cities = JSON.parse(localStorage.getItem('cities')) || [];    
    
      for (i = 0; i < cities.length; i++) {
      
          var histButton = $('<button class="hist-btn btn btn-outline-dark">');
      
          histButton.addClass('hist-btn');
      
          histButton.attr('data-name', cities[i]);
      
          histButton.text(cities[i]);
      
          $('#history-spot').append(histButton);
      
        }
      }
      
      $('#search-btn').on('click', function (event) {
        
        event.preventDefault();
        
  var cities = getLocalStorage();
  
  console.log(cities);
  // $('#history-spot').empty();
  
  // for (i = 0; i < cities.length; i++) {
    
  //   var histButton = $('<button class="hist-btn btn btn-outline-dark">');
    
  //   histButton.addClass('hist-btn');
    
  //   histButton.attr('data-name', cities[i]);
    
  //   histButton.text(cities[i]);
    
  //   $('#history-spot').append(histButton);
  var cities = getLocalStorage();
  console.log(cities);
  var cityName = $("#search-input").val().trim();
  console.log(cityName);
  
  if (cities.includes(cityName)) {
    console.log("already chosen");
  } else {
    cities.push(cityName);
    console.log(cities);
    localStorage.setItem("cities", JSON.stringify(cities));
    
    if (cities.length > 5) {
      cities.sort();
    }
  }
  // }
  
  renderHistory();
})



function storyHistory(cityName) {
  var cities = getLocalStorage();
  console.log(cities);
  var cityName = $("#search-input").val().trim();
  console.log(cityName);
  
  if (cities.includes(cityName)) {
    console.log("already chosen");
  } else {
    cities.push(cityName);
    console.log(cities);
    localStorage.setItem("cities", JSON.stringify(cities));
    
    if (cities.length > 5) {
      cities.sort();
    }
  }
  
};

$(document).on('click', '#search-btn', displayChosenCity);

// $("#search-btn").on("click", function (event) {
//   event.preventDefault();
//   var cityName = $("#search-input").val().trim();
//   // console.log(cities);
//   console.log(cityName);

//   //  if (localStorage.key('cities').includes(cityName)) {
//   //   console.log("City already in list")
//   // } else {
//     // cities.push(localStorage.getItem('cities'));
//     // cities.push(cityName);

//     // localStorage.setItem('cities', cities);
//   // }

//   // storeHistory();
//   // getLocalStorage();
//   renderHistory();
// });
    
//   $(document).on("click", "#search-btn", displayChosenCity);


  // function storeHistory(cityName) {
  //   var cities = getLocalStorage();
  //   var cityName = $('#search-input').val().trim();
  //   console.log(cities);

  //   cities.push(cityName)

  //   if (cities.length >5) {
  //     cities.shift();
  //     console.log(cities);
  //   }

  //   localStorage.setItem('cities', JSON.stringify(cities));
  // };



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
