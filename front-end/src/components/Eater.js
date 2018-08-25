import React, { Component } from 'react';
import axios from 'axios'
import Nav from './Nav.js'

class Eater extends Component{

  state = {
    cart : [] 
  }

  componentDidMount(){
    const {user} = this.props
    if (user.cart.length > 0){
      user.cart.forEach(item => {
        axios.get(`http://localhost:8080/products/`,{
          params : {
            _id : item
          }
        })
        .then(response => {
          this.setState({
            cart : [...this.state.cart, response.data[0]]
          })
        })
      })
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user !== this.props.user) {
      const {user} = this.props
      if (user.cart.length > 0){
        user.cart.forEach(item => {
          axios.get(`http://localhost:8080/products/`,{
            params : {
              _id : item
            }
          })
          .then(response => {
            this.setState({
              cart : [...this.state.cart, response.data[0]]
            })
          })
        })
      }
    }
  }

  render(){
    const {isMakerLoggedIn, isEaterLoggedIn, user} = this.props
    const mappedCart = this.state.cart.map((item) => {
      return <div className="card col-lg-4 col-md-4 col-sm-6 col-6">
              <img className="card-img-top" src=
                {
                  `http://localhost:8080/images/${item.img.filename}` + (item.img.mimetype === 'image/jpeg' 
                                                                          ? '.jpg' : '.png') 
                }                                               
                alt={`${item.img.filename}`}/>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{item.name}</h5>
                <p className="card-text "> Description : <br />{item.description}</p>
                <p className="card-text">Ingredients : <br />{item.ingredients}</p>
                <p className="card-text text-secondary">Price : {item.price} CAD</p>
                {/* <p className="card-text">Ratings : {item.ratings}</p> */}
                <a href="#" className="btn btn-danger">Delete</a>
              </div>
            </div>
    })
    
    return(
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn}
             isEaterLoggedIn={isEaterLoggedIn} 
             user={user}/>
        <div className="maker-body m-width">
          <h1>Hi Eater, {user.fname}</h1>
          <div class="row">
            <div class="col-3">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-cart-tab" data-toggle="pill" href="#v-pills-cart" role="tab" aria-controls="v-pills-cart" aria-selected="true">Cart</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                <a class="nav-link" id="v-pills-payment-tab" data-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment</a>
              </div>
            </div>
            <div class="col-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-cart" role="tabpanel" aria-labelledby="v-pills-cart-tab">
                  {
                    user.cart.length > 0 
                    ? <div className="row">
                        {mappedCart} 
                      </div>
                    : <h1>Empty Cart</h1>
                  }
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="row">
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">First Name</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.fname}</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">Last Name</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.lname}</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">City</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.city}</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">State</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.state}</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">Zip Code</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.zip}</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4 className="border-right">Country</h4>
                    </div>
                    <div className="text-center col-12 col-sm-12 col-md-6 col-lg-6">
                      <h4>{user.country}</h4>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Cart extends Component {
  render(){
    return(
      <h1>Cart </h1>
    )
  }
}

class EditCart extends Component {
  render(){
    return(
      <h1>Edit Cart</h1>
    )
  }
}

class Profile extends Component {
  render(){
    const {user} = this.props
    return(
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 className="border-right">First Name : </h4>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 className="border-right">{user.fname}</h4>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 className="border-right">Last Name : </h4>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h4 className="border-right">{user.lname}</h4>
        </div>
      </div>
    )
  }
}

class editProfile extends Component {
  render(){
    return(
      <h1>Edit Cart</h1>
    )
  }
}

export default Eater;