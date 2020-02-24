import React, { Component } from 'react';
import '../css/App.css';

import AddApointment from "./AddAppointment";
import ListAppointments from './ListAppointments';

class App extends Component {
  constructor(){
    super();
    this.state={
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

  componentDidMount(){
    fetch('./data.json')
      .then(Response => Response.json())
      .then(result => {
        const temp_appointments = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex + 1})
          return item;
        })

        this.setState({appointments: temp_appointments});
      })
  }

  toggleDisplay() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      aptBtnDisplay: !this.state.aptBtnDisplay
    })
  }

  addAppointment(apt){
    apt.aptId = this.state.lastIndex;
    let temp_apts = this.state.appointments;
    temp_apts.unshift(apt);

    this.setState({
      appointments: temp_apts,
      lastIndex: this.state.lastIndex + 1
    })
  }

  toggleList(){
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
