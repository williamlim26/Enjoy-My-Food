import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Help from './Help.js'
import LogIn from './LogIn.js'
import SignUp from './SignUp.js'
import Home from './Home.js'
import MakerSignUp from './MakerSignUp.js'
import EaterSignUp from './EaterSignUp.js'
import Maker from './Maker.js'
import Eater from './Eater.js'
import MakerLogIn from './MakerLogIn.js'
import EaterLogIn from './EaterLogIn.js'
import MakerLogOut from './MakerLogOut.js'
import EaterLogOut from './EaterLogOut.js'
import MakerUpdateProfile from './MakerUpdateProfile.js'
import SignUpConfirmationMaker from './SignUpConfirmationMaker'
import SignUpConfirmationEater from './SignUpConfirmationEater'
import Products from './Products.js'
import axios from 'axios'
import '../App.css';

class App extends Component {
  state = {
    koreanFoodList : [],
    japaneseFoodList : [],
    malaysianFoodList : [],
    user : {
      _id : "",
      email : "", 
      fname : "", 
      lname : "", 
      password : "", 
      city : "", 
      state : "", 
      zip : "", 
      country : "",
      description : "",
      products : [],
      img : {
        filename : "",
        mimetype : ""
      }
    },
    eaterUser : {
      _id : "",
      email : "", 
      fname : "", 
      lname : "", 
      password : "", 
      city : "", 
      state : "", 
      zip : "", 
      country : "",
      checkedOut : [],
      cart : []
    },
    isMakerLoggedIn : false,
    isEaterLoggedIn : false,
    isMakerSignUpSuccessful : false,
    isEaterSignUpSuccessful : false
  }   
  
  componentDidMount(){

    this.setState({
      isMakerSignUpSuccessful : false,
      isEaterSignUpSuccessful : false
    })
    let str = localStorage.getItem("ENJOYMYFOOD")
    let user = JSON.parse(str)
    if(user){
      this.setState({
        user : {
          _id : user.maker._id,
          email : user.maker.email, 
          fname : user.maker.fname, 
          lname : user.maker.lname, 
          password : user.maker.password, 
          city : user.maker.city, 
          state : user.maker.state, 
          zip : user.maker.zip, 
          country : user.maker.country,
          description : user.maker.description,
          products : user.maker.products,
          img : {
            filename : user.maker.img.filename,
            mimetype : user.maker.img.mimetype
          }
        },
        eaterUser : {
          _id : user.eater._id,
          email : user.eater.email, 
          fname : user.eater.fname, 
          lname : user.eater.lname, 
          password : user.eater.password, 
          city : user.eater.city, 
          state : user.eater.state, 
          zip : user.eater.zip, 
          country : user.eater.country,
          checkedOut : user.eater.checkedOut,
          cart : user.eater.cart
        },
        isMakerLoggedIn : user.isMakerLoggedIn,
        isEaterLoggedIn : user.isEaterLoggedIn
      })
    }

    axios.get(`http://localhost:8080/products/Korean`)
      .then (response => {
        this.setState({
          koreanFoodList : response.data
        })
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`http://localhost:8080/products/Japanese`)
      .then (response => {
        this.setState({
          japaneseFoodList : response.data
        })
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    
    axios.get(`http://localhost:8080/products/Malay`)
      .then (response => {
        this.setState({
          malaysianFoodList : response.data
        })
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate(){
    localStorage.setItem("ENJOYMYFOOD", JSON.stringify(
      {
        maker : {
          _id : this.state.user._id,
          email : this.state.user.email, 
          fname : this.state.user.fname, 
          lname : this.state.user.lname, 
          password : this.state.user.password,
          city : this.state.user.city, 
          state : this.state.user.state, 
          zip : this.state.user.zip, 
          country : this.state.user.country,
          description : this.state.user.description,
          products : this.state.user.products,
          img : {
            filename : this.state.user.img.filename,
            mimetype : this.state.user.img.mimetype
          }
        },
        eater: {
          _id : this.state.eaterUser._id,
          email : this.state.eaterUser.email, 
          fname : this.state.eaterUser.fname, 
          lname : this.state.eaterUser.lname, 
          password : this.state.eaterUser.password, 
          city : this.state.eaterUser.city, 
          state : this.state.eaterUser.state, 
          zip : this.state.eaterUser.zip, 
          country : this.state.eaterUser.country,
          checkedOut : this.state.eaterUser.checkedOut,
          cart : this.state.eaterUser.cart
        },      
        isEaterLoggedIn : this.state.isEaterLoggedIn,
        isMakerLoggedIn : this.state.isMakerLoggedIn
    }))
  }

  handleMakerSignUp = (email, fname, lname, password, city, state, zip, country) => {
    axios.post(`http://localhost:8080/makerSignUp/`,{
        email : email, 
        fname : fname, 
        lname : lname, 
        password : password, 
        city : city, 
        state : state, 
        zip : zip, 
        country : country
      })
      .then (response => {
        this.setState({
          isMakerSignUpSuccessful : true
        })
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleEaterSignUp = (email, fname, lname, password, city, state, zip, country) => {
    axios.post(`http://localhost:8080/eaterSignUp/`,{
        email : email, 
        fname : fname, 
        lname : lname, 
        password : password, 
        city : city, 
        state : state, 
        zip : zip, 
        country : country
      })
      .then (response => {
        this.setState({
          isEaterSignUpSuccessful : true
        })
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleMakerLogIn = (email, password) => {
    console.log(email)
    axios.get(`http://localhost:8080/makerLogIn/`,{
      params : {
          email : email, 
          password : password
        }
      })
      .then (response => {
        this.setState({
          isMakerLoggedIn : response.data.length > 0 ? true : false,
          user : response.data[0]
        })
        console.log(this.state.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleEaterLogIn = (email, password) => {
    console.log(email)
    axios.get(`http://localhost:8080/eaterLogIn/`,{
      params : {
          email : email, 
          password : password
        }
      })
      .then (response => {
        this.setState({
          isEaterLoggedIn : response.data.length > 0 ? true : false,
          eaterUser : response.data[0]
        })
        console.log(this.state.eaterUser)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleMakerProfileUpdate = (_id, email, fname, lname, password, city, state, zip, country, summary, data) => {
    
    axios.post('http://localhost:8080/storeImage', data)      
      .then (response => {
        if (response.data.log === "success"){
          axios.put(`http://localhost:8080/updateMakerProfile/profile/`,{
            _id : _id,
            email : email, 
            fname : fname, 
            lname : lname, 
            password : password, 
            city : city, 
            state : state, 
            zip : zip, 
            country : country,
            description : summary,
            img : {
              filename : response.data.filename,
              mimetype : response.data.mimetype
            }
          })
          .then (response => {
            console.log(response)
            this.setState({
              user : {
                _id : response.data._id,
                email : response.data.email, 
                fname : response.data.fname, 
                lname : response.data.lname, 
                password : response.data.password, 
                city : response.data.city, 
                state : response.data.state, 
                zip : response.data.zip, 
                country : response.data.country,
                description : response.data.description,
                img : {
                  filename : response.data.img.filename,
                  mimetype : response.data.img.mimetype
                },
                products : response.data.products
              }
                
            })
            return (<Redirect to={`/maker/${this.state.user._id}`}/> )
          })
          .catch((err) => {
            console.log(err)
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    
    
  }

  handleAddProduct = (productName, productPrice, productCategory, productIngredients, productDescription, data) => {
    
    axios.post('http://localhost:8080/storeImage', data)      
      .then (response => {
        if (response.data.log === "success"){
          axios.post(`http://localhost:8080/products/`,{
            name : productName,
            description : productDescription,
            ingredients : productIngredients,
            price : productPrice,
            ratings : "",
            img : {
              filename : response.data.filename,
              mimetype : response.data.mimetype
            },
            category : productCategory
          })
          .then (response => {
            axios.put(`http://localhost:8080/updateMakerProfile/product/`,{
              _id : this.state.user._id,
              imgId : response.data._id
            })
            .then (response => {
              console.log(response.data)
              this.setState({
                user : {
                  _id : response.data._id,
                  email : response.data.email, 
                  fname : response.data.fname, 
                  lname : response.data.lname, 
                  password : response.data.password, 
                  city : response.data.city, 
                  state : response.data.state, 
                  zip : response.data.zip, 
                  country : response.data.country,
                  description : response.data.description,
                  img : {
                    filename : response.data.img.filename,
                    mimetype : response.data.img.mimetype
                  },
                  products : response.data.products
                }
              })
            })
            .catch((err) => {
              console.log(err)
            })
          })
          .catch((err) => {
            console.log(err)
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleAddCart = (_id) => {
    axios.put(`http://localhost:8080/cart/add/`,{
        userId : this.state.eaterUser._id,
        productId : _id
      })
      .then (response => {
        console.log(response.data)
        this.setState({
          eaterUser : response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleMakerLogOut = (bool) => {
    if(bool){
      localStorage.clear()
      this.setState({
        isMakerLoggedIn : false,
        user : {
          _id : "",
          email : "", 
          fname : "", 
          lname : "", 
          password : "", 
          city : "", 
          state : "", 
          zip : "", 
          country : "",
          description : "",
          products : [],
          checkedOut : [],
          cart : [],
          img : {
            filename : null,
            mimetype : null
          }
        }
      })
    } 
  }

  handleEaterLogOut = (bool) => {
    if(bool){
      localStorage.clear()
      this.setState({
        isEaterLoggedIn : false,
        eaterUser : {
          _id : "",
          email : "", 
          fname : "", 
          lname : "", 
          password : "", 
          city : "", 
          state : "", 
          zip : "", 
          country : "",
          description : "",
          checkedOut : [],
          cart : []
        }
      })
      localStorage.clear()
    } 
  }
  
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={
            reactProps => 
              <Home isMakerLoggedIn={this.state.isMakerLoggedIn}
                    isEaterLoggedIn={this.state.isEaterLoggedIn}
                    japaneseFoodList={this.state.japaneseFoodList}
                    koreanFoodList={this.state.koreanFoodList}
                    malaysianFoodList={this.state.malaysianFoodList}
                    user={this.state.isMakerLoggedIn ? this.state.user : this.state.eaterUser}
                    match={reactProps.match}
                    isNewUserSignedUpUpdate={this.isNewUserSignedUpUpdate}/>
                    }/>

          <Route path="/help" render={
            reactProps => 
              <Help isMakerLoggedIn={this.state.isMakerLoggedIn}
                    isEaterLoggedIn={this.state.isEaterLoggedIn} 
                    match={reactProps.match}
                    user={this.state.isMakerLoggedIn ? this.state.user : this.state.eaterUser}/>
            }/>
          <Route path="/login" render={
            reactProps => 
              <LogIn  isMakerLoggedIn={this.state.isMakerLoggedIn}
                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                      match={reactProps.match}
                      user={this.state.user}/>
            }/>
          <Route path="/signup" render={
            reactProps => 
              <SignUp isMakerLoggedIn={this.state.isMakerLoggedIn}
                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                      match={reactProps.match}
                      user={this.state.user}/>
            }/>
          <Route path="/makerSignUp" render={
            reactProps => 
                this.state.isMakerSignUpSuccessful
                  ? (<Redirect to="/makerSignupConfirmation"/>)
                  : (<MakerSignUp isMakerLoggedIn={this.state.isMakerLoggedIn}
                                isEaterLoggedIn={this.state.isEaterLoggedIn}
                                match={reactProps.match} 
                                handleMakerSignUp={this.handleMakerSignUp}
                                user={this.state.user}/>)
            }/> 
          <Route path="/eaterSignUp" render={
            reactProps => 
                this.state.isEaterSignUpSuccessful
                      ? (<Redirect to="/eaterSignupConfirmation"/>)
                      :  (<EaterSignUp  isMakerLoggedIn={this.state.isMakerLoggedIn}
                                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                                      handleEaterSignUp={this.handleEaterSignUp}
                                      match={reactProps.match}/>)
            }/> 
          <Route path="/makerLogIn" render={
            reactProps => (
              this.state.isMakerLoggedIn
                ? (<Redirect to={`/maker/${this.state.user._id}`}/> )
                : (<MakerLogIn isMakerLoggedIn={this.state.isMakerLoggedIn}
                          isEaterLoggedIn={this.state.isEaterLoggedIn}
                          match={reactProps.match} 
                          handleMakerLogIn={this.handleMakerLogIn}
                          user={this.state.user}/>)
            )}/> 

          <Route path="/eaterLogIn" render={
            reactProps => (
              this.state.isEaterLoggedIn
                ? (<Redirect to={`/eater/${this.state.eaterUser._id}`}/> )
                : (<EaterLogIn isMakerLoggedIn={this.state.isMakerLoggedIn}
                          isEaterLoggedIn={this.state.isEaterLoggedIn}
                          match={reactProps.match} 
                          handleEaterLogIn={this.handleEaterLogIn}/>)
            )}/> 
          <Route path="/makerLogout" render={
            reactProps => (
              !this.state.isMakerLoggedIn
                ? (<Redirect to="/"/> )
                : (<MakerLogOut isMakerLoggedIn={this.state.isMakerLoggedIn}
                          isEaterLoggedIn={this.state.isEaterLoggedIn}
                          match={reactProps.match} 
                          user={this.state.user}
                          handleMakerLogOut={this.handleMakerLogOut}/>)
            )}/>
          
          <Route path="/eaterLogout" render={
            reactProps => (
              !this.state.isEaterLoggedIn
                ? (<Redirect to="/"/> )
                : (<EaterLogOut isMakerLoggedIn={this.state.isMakerLoggedIn}
                          isEaterLoggedIn={this.state.isEaterLoggedIn}
                          match={reactProps.match} 
                          user={this.state.user}
                          handleEaterLogOut={this.handleEaterLogOut}/>)
            )}/> 
          
            <Route path="/maker/:id" render={
            reactProps => 
              <Maker  isMakerLoggedIn={this.state.isMakerLoggedIn}
                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                      match={reactProps.match}
                      user={this.state.user}
                      handleAddProduct={this.handleAddProduct}/>
            }/>

            <Route path="/eater/:id" render={
            reactProps => 
              <Eater  isMakerLoggedIn={this.state.isMakerLoggedIn}
                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                      match={reactProps.match}
                      user={this.state.eaterUser}/>
            }/>

            <Route path="/updateMakerProfile/:id" render={
            reactProps => 
                <MakerUpdateProfile   isMakerLoggedIn={this.state.isMakerLoggedIn}
                                      isEaterLoggedIn={this.state.isEaterLoggedIn} 
                                      match={reactProps.match}
                                      user={this.state.user}
                                      handleMakerProfileUpdate={this.handleMakerProfileUpdate}/>
            }/>

            <Route path="/makerSignupConfirmation" render={
              reactProps => 
                <SignUpConfirmationMaker isMakerLoggedIn={this.state.isMakerLoggedIn}
                                          isEaterLoggedIn={this.state.isEaterLoggedIn} />
            }/>

             <Route path="/eaterSignupConfirmation" render={
              reactProps => 
                <SignUpConfirmationEater isMakerLoggedIn={this.state.isMakerLoggedIn}
                                          isEaterLoggedIn={this.state.isEaterLoggedIn} />
            }/>

            <Route path="/products" render={
              reactProps => 
                <Products isMakerLoggedIn={this.state.isMakerLoggedIn}
                        isEaterLoggedIn={this.state.isEaterLoggedIn} 
                        match={reactProps.match}
                        handleAddCart={this.handleAddCart}
                        user={this.state.isMakerLoggedIn ? this.state.user : this.state.eaterUser}/>
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;
