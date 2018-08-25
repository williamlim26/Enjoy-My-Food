import React, { Component } from 'react';
import Nav from './Nav.js'
import axios from 'axios'
import {Route, Switch, Link} from 'react-router-dom'

class Products extends Component {
  
  state = {
    cuisines : [
      "All",
      "Ainu",
      "Albanian",
      "Argentina",
      "Andhra",
      "Anglo-Indian",
      "Arab",
      "Armenian",
      "Assyrian",
      "Awadhi",
      "Azerbaijani",
      "Balochi",
      "Belarusian",
      "Bengali",
      "Berber",
      "Buddhist",
      "Bulgarian",
      "Cajun",
      "Chechen",
      "Chinese cuisine",
      "Chinese Islamic",
      "Circassian",
      "Crimean Tatar",
      "Estonian",
      "French",
      "Filipino",
      "Georgian",
      "Goan",
      "Goan Catholic",
      "Greek",
      "Hyderabad",
      "Indian cuisine",
      "Indian Chinese",
      "Indian Singaporean cuisine",
      "Indonesian",
      "Inuit",
      "Italian American",
      "Italian cuisine",
      "Japanese",
      "Jewish",
      "Karnataka",
      "Kazakh",
      "Keralite",
      "Korean",
      "Kurdish",
      "Laotian",
      "Latvian",
      "Lithuanian",
      "Louisiana Creole",
      "Maharashtrian",
      "Mangalorea",
      "Malay",
      "Malaysian Chinese cuisine",
      "Malaysian Indian cuisine",
      "Mediterranean cuisine",
      "Mexican",
      "Mordovian",
      "Mughal",
      "Native American",
      "Nepalese",
      "New Mexican",
      "Odia",
      "Parsi",
      "Pashtun",
      "Polish",
      "Pennsylvania Dutch",
      "Pakistani",
      "Peranakan",
      "Persian",
      "Peruvian",
      "Portuguese",
      "Punjabi",
      "Rajasthani",
      "Romanian",
      "Russian",
      "Sami",
      "Serbian",
      "Sindhi",
      "Slovak",
      "Slovenian",
      "Somali",
      "South Indian",
      "Sri Lankan",
      "Tatar",
      "Thai",
      "Turkish",
      "Tamil",
      "Udupi",
      "Unknown",
      "Ukrainian",
      "Yamal",
      "Zanzibari"
    ]
  }
  
  render(){
    const {isMakerLoggedIn, isEaterLoggedIn, user, match} = this.props;
    const mappedCuisines = this.state.cuisines.map((item, index) => {
      return <Link key={index} className="dropdown-item" to={match.url + `/${item}`}>{item}</Link>
    })
    const mappedRoute = this.state.cuisines.map((item, index) => {
      return <Route key={index} path={match.path + `/${item}`} render={
                () => 
                  <Food category={item} handleAddCart={this.props.handleAddCart}/>
              } />      
    })
    return (
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn} isEaterLoggedIn={isEaterLoggedIn} user={user}/>
        <div className="maker-body m-width">
          <h4>Select Your : </h4>
          <div className="btn-group mb-3">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category
            </button>
            <div className="dropdown-menu">
                {mappedCuisines}
            </div>
          </div>
          <div>
            <Switch>
              {mappedRoute}
            </Switch> 
          </div>
        </div>
      </div>
    )
  }
}


class Food extends Component{

  state = {
    list : []
  }

  componentDidMount(){

      const {category} = this.props
      axios.get(`http://localhost:8080/products/${category}`)
        .then (response => {
          this.setState({
            list : response.data
          })
          // console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  componentDidUpdate(prevProps){
    if(prevProps.category !== this.props.category) {
      const {category} = this.props
      axios.get(`http://localhost:8080/products/${category}`)
        .then (response => {
          this.setState({
            list : response.data
          })
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
  }

  render(){
    const mappedList = this.state.list.map((item, index) => {
        return <div key={index} className="card col-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <img className="card-img-top" src=
                {
                  `http://localhost:8080/images/${item.img.filename}` + (item.img.mimetype === 'image/jpeg' 
                                                                         ? '.jpg' : '.png') 
                }                                               
                alt={`Card ${index}`}/>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{item.name}</h5>
                  <p className="card-text text-secondary"> Description : {item.description}</p>
                  <p className="card-text text-secondary">Ingredients : {item.ingredients}</p>
                  <p className="card-text text-black-50">Price : {item.price} CAD</p>
                  {/* <p className="card-text">Ratings : {item.ratings}</p> */}
                  <button onClick={() => this.props.handleAddCart(item._id)} className="btn btn-outline-info">Add To Cart</button>
                </div>
              </div>
      })
    return(
      <div className="row product">
        {mappedList}
      </div>
    )
  }
}

export default Products;