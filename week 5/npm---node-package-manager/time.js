const request = require('request');

request('https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people', function (error, response, body) {
  console.log(body); 
});