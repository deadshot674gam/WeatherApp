const request = require('request');

const openweather = (city_name, callback) => {
    const api_key = 'e05f27b4609124c8645cbc0b573670c8'
    const units = 'metric'
    const lang = 'en'

    // URL 
    const  openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid='+api_key+'&units='+units+'&lang='+lang

    // Request made to api
    request({ url: openWeatherUrl, json: true }, (error, response) => {

        if (error) {
            callback('Error occured in making request. Please check your internet connection.')
        } 
        else if (response.body.error || response.body.message) {
            callback('Unable to find location')
        }
        else {
            callback(response.body)
        }
    })

}

module.exports = openweather