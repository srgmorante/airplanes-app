// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Table from '../../00-components/table-component';
// Styles
import './index.css'
// Actions
import { loadAirports } from '../../02-actions/airports';

class AirportsContainer extends Component {
  componentDidMount() {
    this.props.loadAirports();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Spain Airports</h1>
        <Table
          className="airports-table"
          dataColumns={['name', 'country', 'city', 'geolocation']}
          dataRows={this.props.airportList}
        />
      </React.Fragment>
    )

  }
};

export default connect((state) => {
  return {
    airportList: state.airport.airportList
  }
}, {loadAirports})(AirportsContainer);
