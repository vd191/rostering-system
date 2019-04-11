import React from "react";
import NoteSummary from "./NoteSummary";
import { Link } from 'react-router-dom';

const NoteList = ({ notes, auth }) => {

  return (
    <div className="mt-5">

      {notes && notes.map((note, index) =>
        <Link to={'/note/' + note.id} key={index} style={{textDecoration: "none", color: '#111'}} >
          <NoteSummary note={note} />
        </Link>
      )}

    </div>
  );
}

export default NoteList;