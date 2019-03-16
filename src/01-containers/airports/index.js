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
      <section>
        <h1>Spain Airports</h1>
        <hr/>
        <Table
          className="airports-table"
          dataColumns={['name', 'country', 'city', 'geolocation']}
          dataRows={this.props.airportList}
        />
      </section>
    )

  }
};

const mapStateToProps = (state) => {
  return {
    airportList: state.airport.airportList
  }
}

const mapDispatchToProps = {
    loadAirports
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportsContainer);
