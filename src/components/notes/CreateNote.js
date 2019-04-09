import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../store/actions/NoteActions';


class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.createNote(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3" >Create New Note</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />

          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">POST</button>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchtToProps = (dispatch) => {
  return {
    createNote: (note)=> dispatch(createNote(note))
  }
}
export default connect(null, mapDispatchtToProps)(CreateNote)