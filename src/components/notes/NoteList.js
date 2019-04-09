import React from "react";
import NoteSummary from "./NoteSummary";
import { Link } from 'react-router-dom';

const NoteList = ({ notes }) => {
  return (
    <div className="shift-list section">

      {notes && notes.map((note, index) =>
        <Link to={'/note/' + note.id} key={index}>
          <NoteSummary note={note} />
        </Link>
      )}

    </div>
  );
}

export default NoteList;