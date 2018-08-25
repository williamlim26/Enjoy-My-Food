import React, { Component } from 'react';

class MakerSignUp extends Component{

  state = {
    cities : ['Burnaby',
                'Lumby',
                'Port Moody',
                'Cache Creek',
                'Maple Ridge',
                'Prince George',
                'Castlegar',
                'Merritt',
                'Prince Rupert',
                'Chemainus',
                'Mission',
                'Richmond',
                'Chilliwack',
                'Nanaimo',
                'Saanich',
                'Clearwater',
                'Nelson',
                'Sooke',
                'Colwood',
                'New Westminster',
                'Sparwood',
                'Coquitlam',
                'North Cowichan',
                'Surrey',
                'Cranbrook',
                'North Vancouver',
                'Terrace',
                'Dawson Creek',
                'North Vancouver',
                'Tumbler',
                'Delta',
                'Osoyoos',
                'Vancouver',
                'Fernie',
                'Parksville',
                'Vancouver',
                'Invermere',
                'Peace River',
                'Vernon',
                'Kamloops',
                'Penticton',
                'Victoria',
                'Kaslo',
                'Port Alberni',
                'Whistler',
                'Langley',
                'Port Hardy']
  }

  handleMakerSignUp = (e) => {
    e.preventDefault();
    const form = e.target
    const {email, fname, lname, password, city, state, zip, country} = form
    console.log(email.value);
    console.log(fname.value);
    console.log(lname.value);
    console.log(password.value);
    console.log(city.value);
    console.log(state.value);
    console.log(zip.value);
    console.log(country.value);

    this.props.handleMakerSignUp(email.value, fname.value, lname.value, password.value, city.value, state.value, zip.value, country.value)
  }

  render(){
    const mappedCities = this.state.cities.map(element => {
      return <option>{element}</option>
    })
    return(
      <div className="makersignupbackground">
        <div className="makersignup-body">
        <img src="./images/logo.png" className="makersignuplogo" alt=""/>
        <div className="msu-width mt-4">
          <form onSubmit={this.handleMakerSignUp}>
            <div class="form-group">
              <input type="email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" id="fname" placeholder="First Name"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" id="lname" placeholder="Last Name"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control form-control-lg" id="password" placeholder="Password"/>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-sm-6 col-md-6">
                <select id="city" className="form-control form-control-lg">
                  <option selected>City</option>
                  {mappedCities}
                </select>
              </div>
              <div className="form-group col-12 col-sm-6 col-md-6">
              <select id="state" className="form-control form-control-lg">
                  <option selected>State</option>
                  <option>British Columbia</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-sm-6 col-md-6">
                <input type="text" className="form-control form-control-lg" id="zip" placeholder="Zip Code"/>
              </div>
              <div className="form-group col-12 col-sm-6 col-md-6">
                <select id="country" className="form-control form-control-lg">
                  <option selected>Country</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
        </div>
      </div>
    )
  }
}

export default MakerSignUp;