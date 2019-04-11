import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="p-5 mh-100 border">
        <h4 className="text-center m-0"> Create new note </h4>
        <div className="d-flex justify-content-start">

          <form onSubmit={this.handleSubmit} className="w-100" >

            <div className="form-group">
              <label htmlFor="title" >Title</label>
              <input className="form-control" type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="content" >Content</label>
              <textarea className="form-control" id="content" rows="5" onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-sm">POST</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchtToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note))
  }
}
export default connect(mapStateToProps, mapDispatchtToProps)(CreateNote)