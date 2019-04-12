import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

import logo from '../../images/logo.PNG';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="p-5 mh-100">
        <div className="border row p-3" style={{width:"70%", margin: "0 auto"}}>

          <div className="col-6">
            <div className="d-flex justify-content-end">
              <img src={logo} alt="Logo" className="d-inline-block" width="250" height="250" />
            </div>
          </div>


          <div className="col-6 d-flex align-items-center">
            <form onSubmit={this.handleSubmit}>
              <h5 className="mb-3"> SIGN IN </h5>
              <div className="text-monospace text-danger">
                {authError ? <p>{authError}</p> : null}
              </div>

              <div className="form-group">
                {/* <label htmlFor="email" className="col-form-label pl-0" >Email</label> */}
                <input placeholder="Enter your email" className="form-control" type="email" id="email" onChange={this.handleChange} />
              </div>


              <div className="form-group">
                {/* <label htmlFor="password" className=" col-form-label pl-0" >Password</label> */}
                <input placeholder="Enter your password" className="form-control" type="password" id="password" onChange={this.handleChange} />
              </div>


              <div className="form-group">
                <button class="btn btn-primary btn-sm col-sm-3 col-form-label">Login</button>
              </div>
            </form >

          </div>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);