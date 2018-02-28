var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ddfa36473c6aff52693c9ff6661da24b&units=metric';

// ddfa36473c6aff52693c9ff6661da24b

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Err(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Err(res.data.message);
        });
    }
};