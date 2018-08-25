import React, { Component } from 'react';

class MakerLogOut extends Component{

  render(){
    return(
      <div className="logout">
      <div className="makerlogin-body">
      <div className="mli-width mt-5">
        <h1 className="display-4 text-dark font-weight-bold">Hey Maker, are you sure you want to log out?</h1>
        <button type="button" onClick={() => this.props.handleMakerLogOut(true)}class="btn btn-primary btn-lg btn-block">Yes</button>
        <button type="button" onClick={() => this.props.handleMakerLogOut(false)} class="btn btn-secondary btn-lg btn-block">No</button>
      </div>
      </div>
      </div>
    )
  }
}

export default MakerLogOut;