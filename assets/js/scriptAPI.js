// initial array for movies

var movies = ['Rush Hour', 'Friday Night Lights', 'Shawshank Redemption', 'Pulp Fiction'];


// function to display movie content
function displayMovieInfo() {

  var movie = $(this).attr('data-name');
  // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
  var queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
  console.log(`The movie you have searched is ${movie}`);

  // https://www.omdbapi.com/?t=shrek&apikey=trilogy

  // create a call to my api targeting the specific movie adding it to the URL and displaying the movie data (ajax is same as fetch)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)  //make sure you're getting reponse
    
    // create a new div to hold the movie
    var movieDiv = $("<div class='movie'>");

    var mTitle = response.Title;

    var hOne = $('<h1>').text(`${mTitle}`);

    movieDiv.append(hOne);
    
    // get the rating form the movie
    var rating = response.Rated; // make sure capitalization is correct
    console.log(rating);

    // print out rating to the page
    var pOne = $('<p>').text(`This movie is rated ${rating}`);

    // append to the page
    movieDiv.append(pOne);


    var released = response.Released;

    console.log(released);


    var pTwo = $('<p>').text(`This movie was released on ${released}`);

    movieDiv.append(pTwo);

    var mPlot = response.Plot;

    var plotEl = $('<p>').text(`${mPlot}`);

    movieDiv.append(plotEl);





    $('#movie-view').prepend(movieDiv);
    
  })
}

// function to display buttons after adding a new movie or pulled from our array of movies

function renderButtons() {

  $('#buttons-view').empty();

  // clearing my moview view
  $('#movie-view').empty();

  // looping through the array for movies stored
  for (i = 0; i < movies.length; i++) {

    // dynamically generate buttons for each movie in our array
    // $("")  <---- multiple document.something
    var a = $('<button>');
    // adding a class of movie-btn to the button
    a.addClass('movie-btn');
    // add an data-attribute
    a.attr('data-name', movies[i]);
    // providing text for the button
    a.text(movies[i]);
    // adding the button to the BUTTON-VIEW DIV
    $('#buttons-view').append(a);
  }

};

// create a function that handles my event to add a movie button
$('#add-movie').on('click', function(event) {
  event.preventDefault();
  console.log('this clicked');
  // create a variable to grab the user VALUE fromt the input box
  var movie = $('#movie-input').val().trim();
  // add a movie to my array
  movies.push(movie);
  // every time we add a movie to the array we want to rerender the buttons
  renderButtons();

});


// addEventListener to handle the clicks  (on click of movie-btn, do displayMovieInfo)
$(document).on('click', '.movie-btn', displayMovieInfo)




renderButtons();