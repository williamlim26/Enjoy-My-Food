import React, { Component } from 'react';
import Nav from './Nav.js'

class Home extends Component{

  render() {
    const {koreanFoodList, malaysianFoodList, japaneseFoodList, isMakerLoggedIn, isEaterLoggedIn, user} = this.props;
        
    return (
      koreanFoodList.length !== 0 && malaysianFoodList.length !== 0 && japaneseFoodList !== 0 
      ?<div>
        <Nav isMakerLoggedIn={isMakerLoggedIn} isEaterLoggedIn={isEaterLoggedIn} user={user}/>
        <div className="home-body hb_width">
          {/* This is carousel */}
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="/images/slide5.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/images/slide6.png" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="/images/slide7.png" alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          {/* This is next sections */}
          <hr className="my-4"/>
          <h1>Sign up today and get some free credits !!!</h1>
          <hr className="my-4"/>
          <h1 className="text-center">New Features Coming Soon</h1>
          <hr className="my-3"/>
          <div className="homecook">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-light">Home Cooking Class</h1>
                <hr className="my-3 hrColor"/>
                <p className="lead text-light">Provide cooking class lessons at your own place</p>
              </div>
            </div>
          </div>
          <hr className="my-3"/>
          <div className="mealkit">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-light">Daily Meal kits</h1>
                 <hr className="my-3 hrColor"/>
                <p className="lead text-light">Provides options for eater to just buy raw ingredients for selected dish and cook it themselves</p>
              </div> 
            </div>
          </div>
          <hr className="my-3"/>
          <div className="caterer">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-light">Catering</h1>
                <hr className="my-3 hrColor"/>
                <p className="lead text-light">Be a caterer and set up your own menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    : <h1>Loading</h1>
    )
  }
}

export default Home;