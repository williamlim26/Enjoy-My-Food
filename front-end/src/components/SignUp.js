import React, { Component } from 'react';
import Nav from './Nav.js'
import {Link} from 'react-router-dom'

class SignUp extends Component {
  render(){
    const {isMakerLoggedIn, isEaterLoggedIn} = this.props
    return(
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn} isEaterLoggedIn={isEaterLoggedIn}/>
        <div className="signup-body">
          <div className="row">
            <div className="makersignupdiv  col-12 col-sm-12 col-md-6 col-lg-6 text-center">
              <Link class="nav-link" to={`/makerSignUp`}>
                <button type="button" className=" btn btn-light btn-lg font-weight-bold">Maker</button>
              </Link>
            </div>
            <div className="eatersignupdiv col-12 col-sm-12 col-md-6 col-lg-6 text-center">
              <Link class="nav-link" to={`/eaterSignUp`}>
                <button type="button" className=" btn btn-light btn-lg font-weight-bold">Eater</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default SignUp;