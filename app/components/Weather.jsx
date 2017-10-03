var React = require('react');
var Form = require('Form');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Miami',
            temp: 35
        }
    },
    handleSearch: function(location) {
        this.setState({
            location: location,
            temp: 23
        });

    },
    render: function () {
        var {temp, location} =this.state;


        return (
            <div>
                <h3>
                    Weather Component
                </h3>
                <Form onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>

            </div>

        );
    }
});

module.exports = Weather;