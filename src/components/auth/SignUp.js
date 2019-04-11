import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

import logo from '../../images/logo.PNG';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="p-5 mh-100 border">
        <div className="d-flex justify-content-center mb-3"><img src={logo} alt="Logo" className="d-inline-block" width="100" height="100"/></div>
        <h4 className="text-center m-0"> SIGN UP </h4>
        <h6 className="text-center mb-5"> Baker's Delight</h6>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.handleSubmit} className="white">

            <div className="form-group row">
              <label htmlFor="email" className="col-sm-4 col-form-label pl-0">Email</label>
              <div className="col-sm-8">
                <input className="form-control" type="email" id="email" onChange={this.handleChange} />
              </div>

            </div>

            <div className="form-group row">
              <label htmlFor="password" className="col-sm-4 col-form-label pl-0">Password</label>
              <div className="col-sm-8">
                <input className="form-control" type="password" id="password" onChange={this.handleChange} />
              </div>

            </div>

            <div className="form-group row">
              <label htmlFor="firstName" className="col-sm-4 col-form-label pl-0">First Name</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" id="firstName" onChange={this.handleChange} />
              </div>

            </div>

            <div className="form-group row">
              <label htmlFor="lastName" className="col-sm-4 col-form-label pl-0">Last Name</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" id="lastName" onChange={this.handleChange} />
              </div>
            </div>

            <div className="form-group row">
              <button class="btn btn-primary btn-sm col-sm-3 col-form-label">Sign Up</button>
            </div>

            <div className="text-center text-monospace text-danger">
              {authError ? <p>{authError}</p> : null}
            </div>

          </form>
        </div>

      </div>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
