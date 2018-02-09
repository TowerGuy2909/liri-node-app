require("dotenv").config();
var keys = require("keys.js");
var fs = require('fs');

input = process.argv;

if (input == "my-tweets"){
	//I should be able to input into bash some my-tweets 
	//and 20 of the last ones should show up, dynamicly
	//generated after passing through the keys set up
	//from npm

}

if (input == "spotify-this-song"){
	Client ID b034a93ee55f446ba1ab89b7e26d2faa
Client Secret 2ff9c3545fb0476db120352436744e18
// this should also run through the npm set up to pick a
// and list out Artist(s), The song's name
// A preview link of the song from Spotify
// The album that the song is from

}

if (input = "movie-this"){
	// Using npm and node again, find the json response 
	// for a movie and all of the below content from 
	// 	omdb
* Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

}

if (input == "do-what-it-says"){
// the spotify prompt should be able to read the random.txt 
// and come up with names for it to run
}