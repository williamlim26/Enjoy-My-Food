import React, { Component } from 'react';
import Nav from './Nav.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Maker extends Component{

  state = {
    cuisines : [
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
    ],
    file : [],
    preview : null
  }

  componentDidMount(){
    const {user}  = this.props
    if (user.products.length > 0 && (user.products.length-this.state.file.length === 1)){
      axios.get(`http://localhost:8080/products/`,{
        params : {
          _id : user.products[user.products.length-1]
        }
      })
      .then(response => {
        this.setState({
          file : [...this.state.file, response.data[0]]
        })
        console.log("The Array is : "+  this.state.file)
        console.log(response.data[0].length)
      })
    } else if (this.state.file.length === 0){
      user.products.forEach(product => {
            axios.get(`http://localhost:8080/products/`,{
              params : {
                _id : product
              }
            })
            .then(response => {
              this.setState({
                file : [...this.state.file, response.data[0]]
              })
              console.log("The Array is : "+  this.state.file)
              console.log(response.data[0].length)
            })
          })
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user !== this.props.user) {
      const {user}  = this.props
      if (user.products.length > 0 && (user.products.length-this.state.file.length === 1)){
        axios.get(`http://localhost:8080/products/`,{
          params : {
            _id : user.products[user.products.length-1]
          }
        })
        .then(response => {
          this.setState({
            file : [...this.state.file, response.data[0]]
          })
          console.log("The Array is : "+  this.state.file)
          console.log(response.data[0].length)
        })
      } else if (this.state.file.length === 0){
        user.products.forEach(product => {
              axios.get(`http://localhost:8080/products/`,{
                params : {
                  _id : product
                }
              })
              .then(response => {
                this.setState({
                  file : [...this.state.file, response.data[0]]
                })
                console.log("The Array is : "+  this.state.file)
                console.log(response.data[0].length)
              })
            })
      }
    }
  }

  handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target
    const data = new FormData();
    const {productName, productPrice, productCategory, productIngredients, productDescription} = form
    
    data.append('productImage', e.target.productImage.files[0])
    this.props.handleAddProduct(productName.value, productPrice.value, productCategory.value, productIngredients.value, productDescription.value, data)
    e.target.reset();
  }

  handlePreview = (e) =>{
    this.setState({
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  handleChange = (e) => {
    const {user} = this.props
    e.preventDefault()
    let data = new FormData()
    data.append('productImage', e.target.files[0])
    data.append('username', user.fname)
    axios.post('http://localhost:8080/storeImage', data)
      .then(response => {
        console.log(response.data)
      })
  }

  render (){
    const {isMakerLoggedIn, isEaterLoggedIn, user, match} = this.props
    const mappedProducts = this.state.file.map((item, index) => {
      return <div key={index} className="card col-lg-4 col-md-4 col-sm-6 col-6">
              <img className="card-img-top" src=
                {
                  `http://localhost:8080/images/${item.img.filename}` + (item.img.mimetype === 'image/jpeg' 
                                                                         ? '.jpg' : '.png') 
                }                                               
                alt={`Card ${index}`}/>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">{item.name}</h5>
                <p className="card-text "> Description : <br />{item.description}</p>
                <p className="card-text">Ingredients : <br />{item.ingredients}</p>
                <p className="card-text text-secondary">Price : {item.price} CAD</p>
                {/* <p className="card-text">Ratings : {item.ratings}</p> */}
                <a className="btn btn-primary">Edit</a>
              </div>
            </div>
    })
    const mappedCuisines = this.state.cuisines.map((item, id) => {
      return <option key={id}>{item}</option>
    })
    console.log(this.state.file)
    return (
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn}
             isEaterLoggedIn={isEaterLoggedIn} 
             user={user}/>
        <div className="maker-body m-width">
          <h1>Welcome, {user.fname}</h1>
          <div className="profile row">
            <div className=" card col-lg-3 col-md-3 col-sm-3 col-12">
              <img className="card-img-top" src={
                  `http://localhost:8080/images/${user.img.filename}` + (user.img.mimetype === 'image/jpeg' 
                                                                         ? '.jpg' : '.png') 
                }   
                 alt={`${user.img.filename}`}/>
              <div className="card-body">
                <h3 className="card-title">{user.fname}</h3>
                <p className="card-text">{user.description}</p>
                <Link className="btn btn-primary" to={`/updateMakerProfile/${match.params.id}`}>Edit Profile</Link>
                {/* <a href="#" className="btn btn-primary">Edit Summary</a> */}
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="addProduct-tab" data-toggle="tab" href="#addProduct" role="tab" aria-controls="addProduct" aria-selected="false">Add Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="food tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  {
                    mappedProducts.length > 0 ? <div className="row">
                                                  {mappedProducts}
                                                </div>
                                              : <h1 className="font-weight-bold"> Add product in "Add Product" Tab</h1>
                   }
                  
                </div>
                <div className="tab-pane fade" id="addProduct" role="tabpanel" aria-labelledby="addProduct-tab">
                  <form className="mt-3" onSubmit={this.handleAddProduct} encType="multipart/form-data">
                    <div className="form-group">
                      <input type="text" className="form-control form-control" id="productName" aria-describedby="emailHelp" placeholder="Product Name"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control" id="productPrice" placeholder="Product Price"/>
                    </div>
                    <div className="form-group">
                      <select className="form-control" id="productCategory">
                        <option>Select Category</option>
                        {mappedCuisines}
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="productIngredients" placeholder="Ingredients" rows="2"></textarea>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="productDescription" placeholder="Description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <label>Upload Product Image</label>
                      <input type="file" name="productImage" onChange={this.handlePreview}/>
                      <img id="productImg" src={this.state.preview}/>
                    </div>
                    <button className="btn btn-outline-info btn-lg btn-block my-3">Add</button>
                  </form>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <h1>To Be Set Up</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Maker


