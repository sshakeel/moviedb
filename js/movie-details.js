var URLParams = new URLSearchParams(window.location.search);
var movieID = URLParams.get('id');

var movieRequestURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=b37e4ca3ccc6c8c0a927bdcc9257084f";

var movieImageBaseURL = "https://image.tmdb.org/t/p/";
var movieImageSize = "w154/";

$.getJSON({
url: movieRequestURL,
  success: function(result) {
    var movieDetails = result;
      $('.movieHeader h2').html(movieDetails.original_title);
      $('.movieProfile img').attr('src', movieImageBaseURL + movieImageSize + movieDetails.poster_path)
      $('.movieYear').html(new Date(movieDetails.release_date).getFullYear());
      $('.movieRuntime span').html(movieDetails.runtime);
      $('.movieScore span').html(movieDetails.vote_average);
      $('.movieDesc p').html(movieDetails.overview);
  }
});
