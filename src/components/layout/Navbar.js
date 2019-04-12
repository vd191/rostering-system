import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux';
import logo from '../../images/logo.PNG';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="d-flex justify-content-between w-100 ml-5 mr-5">
        <div>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="d-inline-block align-top" width="40" height="40" />
          </Link>
        </div>

        <div>
          {links}
        </div>

      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar);