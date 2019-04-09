import React from "react";

const NoteSumnary = ({note}) => {
  return (

    <div className="card z-depth-0 shift-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.title}</span>
        <p>Posted by Admin</p>
        <p className="grey-text"> 3rd September 2019 </p>
      </div>
    </div>
  );
}

export default NoteSumnary;