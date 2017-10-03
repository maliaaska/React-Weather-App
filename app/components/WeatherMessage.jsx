var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        return (
            <h3>
                It's  23ºC in Barcelona.
            </h3>
        );
    }
});

module.exports = WeatherMessage;