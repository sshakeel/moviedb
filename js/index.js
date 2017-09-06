var APIKey = "YOUr_API_HERE";

var movieDBBaseURL = "https://api.themoviedb.org/3/";

var movieRequestType = ["movie/", "find/"];         //[0] - collection, [1] - single movie
var movieCollectionFlag = ["popular", "top_rated"];
var movieCollectionRequestURL = movieDBBaseURL + movieRequestType[0] + movieCollectionFlag[0] + "?api_key=" + APIKey;

var movieImageBaseURL = "https://image.tmdb.org/t/p/";
var movieImageSize = "w185/";
console.log(movieCollectionRequestURL);

$.getJSON({
url: movieCollectionRequestURL,
  success: function(result) {
    var movieList = result;
    for(var i=0; i<10; i++){
      var imgFileName = movieList.results[i].poster_path;
      var movieID = movieList.results[i].id;
      $('.movieList ul').append('<li><a href="movie-details.html?id=' + movieID + '"><img src="' + movieImageBaseURL + movieImageSize + imgFileName + '" alt="" /></a></li>');
    }
    console.log(movieList);
  }
});
