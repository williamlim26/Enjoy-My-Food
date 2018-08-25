import React, { Component } from 'react';
import Nav from './Nav.js'

class Help extends Component {
  render(){
    const {isMakerLoggedIn, isEaterLoggedIn, user} = this.props;
    return (
      <div className="maker-body m-width">
        <Nav isMakerLoggedIn={isMakerLoggedIn} isEaterLoggedIn={isEaterLoggedIn} user={user}/>
        <h1>Help Page is currently not available</h1>
      </div>
    )
  }
}

export default Help;