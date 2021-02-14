const request = require('request')


const city_name = 'Kanpur'
const api_key = SECRETS.OpenWeatherMap_APIKEY
const units = 'metric'


const  openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid='+api_key+'&units='+units
request({url: openWeatherUrl,json: true},(error,response)=>{

    if (error){
        console.log('Error occured in network Connection. Please check your internet connection.')
    } else{
        const data = response.body.main
        console.log(data)
    }
})

// const address = 'Kanpur'

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGVhZHNob3Q2NzRnYW0iLCJhIjoiY2tsNWNrZGJ6MjVzYjJwcW95MGxsbmJ6byJ9.m_MX8LD5ZNBXCY0XQy49Vg'

// request({ url: url2, json: true},(error,response)=> {
//     // console.log(response.body.features)

//     const data = response.body.features
//     const requiredData = data.find( i => i.text === address)
//     // const requ
//     console.log(requiredData.geometry.coordinates)
    
// })

