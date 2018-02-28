import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './Main.js';
import About from './About.js';
import Examples from './Examples.js';
import Weather  from './Weather.js'

const WeatherApp = () => {
  return(
    <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="About" component={About}/>
          <Route path="Examples" component={Examples}/>
          <IndexRoute component={Weather}/>
      </Route>
    </Router>
  </div>
  )
  
}

export default WeatherApp;
