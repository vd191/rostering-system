import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const NoteDetails = (props) => {
  const { note } = props;

  if (note) {
    return (
      <div className="container section note-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {note.title} </span>
            <p>{note.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div> Posted by {note.staffFistName} {note.staffLastName}</div>
            <div> 2nd September, 2 am</div>
          </div>

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
    note: note
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])

)(NoteDetails)
