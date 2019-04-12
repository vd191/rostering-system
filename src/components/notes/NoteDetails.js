import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const NoteDetails = (props) => {
  const { note, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />

  if (note) {
    return (
      <div className="p-5 mh-100 border">
        <div className="d-flex justify-content-center">
          <h3 className=""> {note.title} </h3>
        </div>

        <p className='text-center mt-4' style={{width:'60%', margin:'0 auto'}}>{note.content}</p>

        <div className="text-center mt-4">
          <p className="card-text m-0">Posted by <span className="text-danger">{note.staffFirstName} {note.staffLastName} </span></p>

          <p className="card-text m-0"><small className="text-muted">{moment(note.createdAt.toDate()).calendar()}</small></p>
        </div>

      </div>

    )

  } else {
    return (
      <div className="container center">
        <p>Loading note...</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes ? notes[id] : null;
  return {
    note: note,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])

)(NoteDetails)


