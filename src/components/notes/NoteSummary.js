import React from "react";
import moment from 'moment';

const NoteSumnary = ({ note }) => {
  return (

    <div className="card mb-3" style={{maxWidth: '540px'}}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">Posted by <span className="text-danger">{note.staffFirstName} {note.staffLastName} </span></p>
            <p className="card-text"><small className="text-muted">{moment(note.createdAt.toDate()).calendar()}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteSumnary;