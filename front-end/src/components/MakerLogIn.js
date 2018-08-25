import React, { Component } from 'react';

class MakerLogIn extends Component{

  handleMakerLogIn = (e) => {
    e.preventDefault();
    const form = e.target
    const {email, password} = form

    this.props.handleMakerLogIn(email.value, password.value)
  }

  render(){
    return(
      <div className="makerloginbackground">
        <div className="makerlogin-body">
          <img src="./images/logo.png" className="makerloginlogo" alt=""/>
          <div className="mli-width mt-4">
            <form onSubmit={this.handleMakerLogIn}>
              <div class="form-group">
                <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="Email"/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control form-control-lg" id="password" placeholder="Password"/>
              </div>
              <button type="submit" class="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MakerLogIn;