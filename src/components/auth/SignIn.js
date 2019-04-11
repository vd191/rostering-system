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
      <div className="p-5 mh-100 border">
        <div className="d-flex justify-content-center mb-3"><img src={logo} alt="Logo" className="d-inline-block" width="100" height="100"/></div>
        <h4 className="text-center m-0"> SIGN IN </h4>
        <h6 className="text-center mb-5"> Baker's Delight</h6>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
          
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-3 col-form-label pl-0" >Email</label>
              <div className="col-sm-9">
                <input className="form-control" type="email" id="email" onChange={this.handleChange} />
              </div>
            </div>


            <div className="form-group row">
              <label htmlFor="password" className="col-sm-3 col-form-label pl-0" >Password</label>
              <div className="col-sm-9">
                <input className="form-control" type="password" id="password" onChange={this.handleChange} />
              </div>
            </div>

            <div className="form-group row">
              <button class="btn btn-primary btn-sm col-sm-3 col-form-label">Login</button>
            </div>

            <div className="text-center text-monospace text-danger">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form >

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