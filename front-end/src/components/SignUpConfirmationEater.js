import React, { Component } from 'react';
import Nav from './Nav.js'

class SignUpConfirmationEater extends Component {
  render(){
    const {isMakerLoggedIn, isEaterLoggedIn} = this.props
    return(
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn}
             isEaterLoggedIn={isEaterLoggedIn} />
        <div className="signup-body container">
          <div class="jumbotron">
            <h1 class="display-4">Hi Eater</h1>
            <hr class="my-4"/>
            <h3>Click on login to get started</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpConfirmationEater;