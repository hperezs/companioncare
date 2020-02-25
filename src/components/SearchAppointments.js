import React, {Component} from 'react';

class SearchAppointments extends Component{
    render(){
        return(
            <div className="input-group ml-2 mt-2">
                <input type="text" className="form-control" placeholder="Search for..." onChange={e => this.props.searchApts(e.target.value)}></input>
            </div>
        )
    }
}

export default SearchAppointments;