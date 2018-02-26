import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';


const WeatherApp = () => {
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="About" component={About}/>
          <Route path="Examples" component={Examples}/>
          <IndexRoute component={Weather}/>
      </Route>
    </Router>
  </div>
}

export default WeatherApp;
