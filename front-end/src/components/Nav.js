import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{

    render(){
        const {isMakerLoggedIn, isEaterLoggedIn, user} = this.props
        return (
            <nav className="navbar navbar-expand-md fixed-top border-bottom">
            <Link className="navbar-brand active" to="/">
                <img src="/images/logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                <span className="sr-only">(current)</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline mr-auto">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary">Search</button>
                </form>
                {!isMakerLoggedIn && !isEaterLoggedIn
                    ?   <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link border-right" to="/products/All">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-right" to="/help">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-right" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>
                        </ul>
                    : isMakerLoggedIn === true
                        ?   <ul className="navbar-nav my-2 my-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link border-right" to="/products/All">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link border-right" to={`/maker/${user._id}`}>{user.fname}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link border-right" to="/help">Help</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/makerLogout">Log Out</Link>
                                </li>
                            </ul>
                        :   <ul className="navbar-nav my-2 my-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link border-right" to="/products/All">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link border-right" to={`/eater/${user._id}`}>{user.fname}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link border-right" to="/help">Help</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/eaterLogout">Log Out</Link>
                                </li>
                            </ul>
                    
                }
            </div>
           
            </nav>
        )
    }
}

export default Nav