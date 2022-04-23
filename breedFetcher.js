const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) {
    console.log('error:', error)}; // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body);
  const data = JSON.parse(body);
  console.log(data);
  

});