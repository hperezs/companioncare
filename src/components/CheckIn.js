import React, { Component } from 'react';
import $ from 'jquery';

class CheckIn extends Component {
  constructor(){
    super();
    this.state = {
      petName: '',
      ownerName: '',
      aptNotes: '',
      aptDate: '',
      timeOffset: ''
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.submitAppointment = this.submitAppointment.bind(this);
  }

  handleChanges(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const offset = $('#time-selector :selected').val();

    this.setState({
      [name]: value,
      timeOffset: offset
    })

  }

  submitAppointment(event){
    event.preventDefault();

    if (this.state.aptNotes === ''){
      this.setState({
        aptNotes: ' ---'
      })
    }

    var date = new Date();
    let current_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
    console.log(current_time);

    let temp_apt = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptNotes: this.state.aptNotes,
      aptDate: current_time,
      timeOffset: this.state.timeOffset
    }

    this.props.addAppointment(temp_apt);

    this.setState({
      petName: '',
      ownerName: '',
      aptNotes: '',
      aptDate: '',
      aptTime: ''
    })

    this.props.toggleDisplay();
  }

  render() {
    return (
      <article className="add-appointment-layout">
        <button className={"layout-dropdown btn btn-primary btn-lg " + (this.props.aptBtnDisplay ? '' : 'hidden')} onClick={this.props.toggleDisplay}>
          <h5><i className="fas fa-user-plus"></i> Check-In</h5>
        </button>
        
        <div className={"container " + (this.props.formDisplay ? '' : 'hidden')}>
          <div className="row justify-content-center">
            <section className="col-sm-12 col-md-10">
              <div className="card-header text-center"><h5>Please enter the required information</h5></div>
              <div className="card-body">

                <form className="appointment-form" noValidate onSubmit={this.submitAppointment}>
                  <div className="form-group form-row justify-content-center">
                    <label className="col-form-label">Pet Name: </label>
                    <div className="col-md-3 col-sm-5">
                      <input onChange={this.handleChanges} type="text" className="form-control" placeholder="Pet's name" name="petName" id="petName"></input>
                    </div>
                  </div>

                  <div className="form-group form-row justify-content-center">
                    <label className="col-form-label">Pet's Owner:</label>
                    <div className="col-md-3 col-sm-5">
                      <input onChange={this.handleChanges} type="text" className="form-control" placeholder="Pet's owner" name="ownerName" id="ownerName"></input>
                    </div>
                  </div>

                  <div className="form-group form-row justify-content-center">
                    <label className="col-form-label">Be there in:</label>
                    <select className="form-control col-md-3 col-sm-5" id="time-selector" required>
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                    </select>
                  </div>

                  <div className="form-group form-row justify-content-center">
                    <label className="col-form-label">Notes: </label>
                    <div>
                      <textarea onChange={this.handleChanges} className="form-control" rows="4" cols="50" placeholder="Appointment Notes" name="aptNotes" id="aptNotes"></textarea>
                    </div>
                  </div>

                  <div className="form-group form-row justify-content-center">
                    <button className="btn btn-danger mx-3" onClick={this.props.toggleDisplay} type="reset">Cancel</button>
                    <button className="btn btn-info" type="submit">Submit</button>
                  </div>

                </form>

              </div>
            </section>
          </div>
        </div>
      </article>
    )
  }
}

export default CheckIn;