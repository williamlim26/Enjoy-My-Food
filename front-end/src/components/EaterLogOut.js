import React, { Component } from 'react';

class EaterLogOut extends Component{

  render(){
    return(
      <div className="logout">
      <div className="makerlogin-body">
      <div className="mli-width mt-4">
        <h1 className="display-4 text-dark font-weight-bold">Hey Eater, are you sure you want to log out?</h1>
        <button type="button" onClick={() => this.props.handleEaterLogOut(true)}class="btn btn-primary btn-lg btn-block">Yes</button>
        <button type="button" onClick={() => this.props.handleEaterLogOut(false)} class="btn btn-primary btn-lg btn-block">No</button>
      </div>
      </div>
      </div>
    )
  }
}

export default EaterLogOut;