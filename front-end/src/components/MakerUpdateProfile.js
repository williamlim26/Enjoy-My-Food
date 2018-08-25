import React, { Component } from 'react';
import Nav from './Nav.js'

class MakerUpdateProfile extends Component{

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
                'Port Hardy'],
    preview : null,
    isSuccessful : false
  }

  handleMakerProfileUpdate = (e) => {
    e.preventDefault();
    const form = e.target
    const {user} = this.props
    const data = new FormData();
    const {email, fname, lname, password, city, state, zip, country, summary} = form
    console.log("update profile")
    data.append('productImage', e.target.productImage.files[0])
    this.props.handleMakerProfileUpdate(user._id, email.value, fname.value, lname.value, password.value,
                      city.value, state.value, zip.value, country.value, summary.value, data)
  }

  handlePreview = (e) =>{
    this.setState({
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  render(){
    const {isMakerLoggedIn, isEaterLoggedIn, user} = this.props
    const mappedCities = this.state.cities.map(element => {
      return <option>{element}</option>
    })
    console.log(this.state.isSuccessful)
    return(
      <div>
        <Nav isMakerLoggedIn={isMakerLoggedIn}
              isEaterLoggedIn={isEaterLoggedIn} 
              user={user}/>
        <div className="makerupdateprofile-body">
          <div className="mup-width">
            <form onSubmit={this.handleMakerProfileUpdate}>
              <div className="form-group">
                <label>Upload Header Photo Image</label>
                <input type="file" name="productImage" onChange={this.handlePreview}/>
                <img id="productImg" src={this.state.preview}/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder={user.email}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" id="fname" placeholder={user.fname}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" id="lname" placeholder={user.lname}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="password" placeholder="password"/>
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
                  <input type="text" className="form-control form-control-lg" id="zip" placeholder={user.zip}/>
                </div>
                <div className="form-group col-12 col-sm-6 col-md-6">
                  <select id="country" className="form-control form-control-lg">
                    <option selected>Country</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" id="summary" placeholder="Summary" rows="3"></textarea>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
        { this.state.isSuccessful
          ?  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          : <div/>
        }
      </div>
    )
  }
}

export default MakerUpdateProfile;