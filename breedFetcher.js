const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);
    
      if (!data[0]) {
        return callback('Invalid or non-existent breed', null);
      }

      return callback(null, data[0].description); //print discription of the cat.
    }
  });
};

module.exports = { fetchBreedDescription };