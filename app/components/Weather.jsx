var React = require('react');
var Form = require('Form');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function () {
        return (
            <div>
                <h3>
                    Weather Component
                </h3>
                <Form/>
                <WeatherMessage/>

            </div>

        );
    }
});

module.exports = Weather;