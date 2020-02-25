import React, { Component } from 'react';
import Moment from 'react-moment';
import SearchAppointments from './SearchAppointments';

class ListAppointments extends Component {
  render() {
    return (
      <article className="list-appointments-layout py-3 ">
        <button className={"btn btn-primary btn-lg " + (this.props.listDisplay ? 'hidden' : '')} onClick={this.props.toggleList}>
          <h5><i className="far fa-address-book"></i>  See Appointments  </h5>
        </button>

        <section className={"container card-header " + (this.props.listDisplay ? '' : 'hidden')}>
          <div className="d-flex bg-secondary">
            <div className="search-component">
              <SearchAppointments searchApts={this.props.searchApts} />
            </div>

            <button className={"btn btn-danger ml-auto my-2 mr-2 "} onClick={this.props.toggleList}><i className="fas fa-times"></i></button>
          </div>

          <section className="appointment-list row overflow-auto bg-light card-body">
            {
              this.props.appointments.map(item => (

                <div className="appointment-layout row py-3 col-12" key={item.aptId}>

                  <div className="col-sm-12 col-md-10 col-lg-8">

                    <div className="apt-head d-flex">
                      <h6 className="pet-name">{item.petName}</h6>
                      <span className="apt-date ml-auto">
                        <Moment
                          date={item.aptDate}
                          parse="YYYY-MM-dd hh:mm"
                          format="MMM-D h:mma"
                        />
                      </span>
                    </div>
                    
                    <div className="owner-name">
                      <span className="label-item">Owner: </span>
                      <span>{item.ownerName}</span>
                    </div>

                    <div>
                      <span className="label-item">Notes: </span>
                      <span>{item.aptNotes}</span>
                    </div>
                  </div>

                </div>
              ))
            }
          </section>
        </section>
      </article>
    )
  }
}

export default ListAppointments;