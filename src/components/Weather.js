import React from 'react';
import Form from './Form.js';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from 'react-open-weather-map';
 
// const props = { isLoading: true, temp: true, location:true }; // info: sample is the response object from the OpenWeatherMap's API
 
// <OpenWeatherMap {...props} />

console.log('test1');
export default class Weather extends React.Component {

  // static propTypes = {
  //   name: React.PropTypes.string.isRequired,
  // };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleSearch = this.handleSearch.bind(this)
  }  

  handleSearch(location) {
      var that = this;
      console.log('test2');
      this.setState({isLoading: true});
      console.log('test3');

      openWeatherMap.getTemp(location).then(function (temp) {
          that.setState({
              isLoading: false,
              location: location,
              temp: temp
          })
      }.bind(this),
       function (errorMessage) { 
          this.setState({isLoading: false});
          alert(errorMessage);
      }).bind(this);
  }

  render() {
    const {isLoading, temp, location} = this.state;
    
    const renderMessage = () => {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>  
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };
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
 
  }

  
