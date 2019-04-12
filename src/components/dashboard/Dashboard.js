import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Notification from "./Notification";
import NoteList from "../notes/NoteList";
import { connect } from 'react-redux';

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { notes, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="dashboard container">

        <div className="card mt-3">
          <div className="card-header">
            USEFUL INFORMATION
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Use the "New Note" button on the top right corner to create a new note if you have any troubles or want to fix the roster. </p>
              <footer className="blockquote-footer">Thank you <cite title="Source Title"></cite></footer>
            </blockquote>
          </div>
        </div>


        <div className="row">
          <div className="col-8">
            <NoteList notes={notes} />
          </div>
          <div className="col-4">
            <Notification notifications={notifications} />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notification
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notification', limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);