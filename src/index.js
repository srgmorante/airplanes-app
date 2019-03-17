// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
// Store
import store from './04-reducers/store';
// Containers
import App from './01-containers/app/App';
import HomeContainer from './01-containers/home';
import AirportsContainer from './01-containers/airports';
import ContactContainer from './01-containers/contact';
// Style
import './index.css';


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/airports/" component={AirportsContainer} />
          <Route path="/contact/" component={ContactContainer} />
        </App>
      </Router>
  </Provider>,
document.getElementById('root'));
