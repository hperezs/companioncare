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
      listDisplay: false,
      queryText: ''
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.searchApts = this.searchApts.bind(this);
  }

  componentDidMount() {
    let index = 0;
    const temp_appointments = data.map(item => {
      item.aptId = index;
      index += 1;
      return item;
    })

    this.setState({ appointments: temp_appointments, lastIndex: index });

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

  searchApts(text){
    this.setState({
      queryText: text
    })
  }

  render() {
    let filteredApts = this.state.appointments;
    filteredApts = filteredApts.filter(eachItem => {
      return(
        eachItem['petName'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        eachItem['ownerName'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        eachItem['aptNotes'].toLowerCase().includes(this.state.queryText.toLowerCase())
      )
    })

    return (
      <div className="app-components justify-content-center">
        <AddApointment
          formDisplay={this.state.formDisplay}
          aptBtnDisplay={this.state.aptBtnDisplay}
          toggleDisplay={this.toggleDisplay}
          addAppointment={this.addAppointment}
        />
        <ListAppointments
          appointments={filteredApts}
          listDisplay={this.state.listDisplay}
          toggleList={this.toggleList}
          searchApts={this.searchApts}
        />
      </div>
    )
  }
}

export default App;
