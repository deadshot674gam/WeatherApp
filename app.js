const yargs = require('yargs');
const openweather = require('./utils/openweather');

const city_name = process.argv[2]

if (city_name) {
    openweather(city_name, (response) => {
        console.log(response)
    })
} else {
    console.log('No city name provided!');
}