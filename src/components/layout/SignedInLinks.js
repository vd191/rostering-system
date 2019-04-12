import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {

  return (
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to='/roster'> Roster</NavLink> 
      <NavLink className="nav-item nav-link" to='/create'> New Note</NavLink> 
      <a className="nav-item nav-link" onClick={props.signOut}> Log Out </a> 
      <NavLink className="nav-item nav-link" to='/'  > {props.profile.firstName} {props.profile.lastName}  </NavLink> 
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);