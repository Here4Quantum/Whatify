var dotenv = require('dotenv');
dotenv.config();
var request = require('request'); 

const DEBUG = false;
var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;
var access_token = process.env.ACCESS_TOKEN;

if(DEBUG) {
    console.log(process.env);
    console.log(client_id);
    console.log(client_secret);
    console.log(access_token);
}

console.log("%cAuthorization request for access token...", "color: green");

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

request.post(authOptions, function(error, response, body) {
    console.log(`response status code:\t${response.statusCode}`)
    if(error)
        console.log(`error:\n${error}`);
    if (!error && response.statusCode === 200) {
        access_token = body.access_token;
        console.log(`current access token:\t${access_token}`);

        if(DEBUG)
            console.log(response);

        // apiCall(access_token);
    }
});

console.log("%cSpotify Web API call...", "color: green");

var XMLHttpRequest = require('xhr2');
var SpotifyWebApi = require('spotify-web-api-js');
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(access_token);

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });
