

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your API Key is ${process.env.OPEN_WEATHER_API_KEY}`);

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
    cityName = req.params.city;
    // console.log('==================api==================', process.env.OPEN_WEATHER_API_KEY)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
            .then(response => res.send(response.data))
            .catch(err => console.log('error', err));
});

module.exports = app;
