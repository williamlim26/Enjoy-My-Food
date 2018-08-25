import React, { Component } from 'react';
import Nav from './Nav.js'
import {Link} from 'react-router-dom'

class LogIn extends Component {

  state = {
    isloading : true
  }

  componentDidMount(){
    this.setState({
      isloading : false
    })
  }

  render(){
    const {isMakerLoggedIn, isEaterLoggedIn} = this.props
    return(
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn} isEaterLoggedIn={isEaterLoggedIn}/>
          <div className="login-body">
            <div className="row">
              <div className="makerlogindiv col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                <h1>Maker</h1>
                <Link class="nav-link" to={`/makerLogIn`}>
                  <button type="button" className="btn btn-outline-light btn-lg my-auto mx-auto font-weight-bold">Maker</button>
                </Link>
              </div>
              <div className="eaterlogindiv col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                <h1>Eater</h1>
                <Link class="nav-link" to={`/eaterLogIn`}>
                  <button type="button" className="btn btn-outline-dark btn-lg my-auto mx-auto font-weight-bold">Eater</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LogIn;