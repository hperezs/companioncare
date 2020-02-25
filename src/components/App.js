import React, { Component } from 'react';
import '../css/App.css';

import AddApointment from "./AddAppointment";
import ListAppointments from './ListAppointments';
import data from "./data/data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      lastIndex: 0,
      formDisplay: false,
      aptBtnDisplay: true,
      listDisplay: false
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    const temp_appointments = data.map(item => {
      let temp_index = this.state.lastIndex;
      item.aptId = temp_index;
      temp_index = + 1;
      console.log(item.aptId);
      this.setState({
        lastIndex: temp_index
      })
      return item;
    })

    this.setState({ appointments: temp_appointments });

  }

  toggleDisplay() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      aptBtnDisplay: !this.state.aptBtnDisplay
    })
  }

  addAppointment(apt) {
    apt.aptId = this.state.lastIndex;
    let temp_apts = this.state.appointments;
    temp_apts.unshift(apt);

    this.setState({
      appointments: temp_apts,
      lastIndex: this.state.lastIndex + 1
    })
  }

  toggleList() {
    this.setState({
      listDisplay: !this.state.listDisplay
    })
  }

  render() {
    return (
      <div>
        <AddApointment
          formDisplay={this.state.formDisplay}
          aptBtnDisplay={this.state.aptBtnDisplay}
          toggleDisplay={this.toggleDisplay}
          addAppointment={this.addAppointment}
        />
        <ListAppointments
          appointments={this.state.appointments}
          listDisplay={this.state.listDisplay}
          toggleList={this.toggleList}
        />
      </div>
    )
  }
}

export default App;
