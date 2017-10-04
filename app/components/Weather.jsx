var React = require('react');
var Form = require('Form');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});


        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }, function (errorMessage) { 
            this.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;


    function renderMessage() {
        if (isLoading) {
          return <h3>Fetching Weather...</h3>  
        } else if(temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
        }
    }

    return (
        <div>
            <h3>
                Weather Component
            </h3>
            <Form onSearch={this.handleSearch}/>
            {renderMessage()}

        </div>

    );
    }
});

module.exports = Weather;