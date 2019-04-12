import React, { Component } from 'react';
import TimeSheet from './TimeSheet';
import CreateShift from './CreateShift';
import RosterDetails from './RosterDetails';

import { connect } from 'react-redux';
import { createShift, updateShift, deleteShift } from '../../store/actions/RosterActions';

import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Roster extends Component {

  constructor() {
    super();
    this.state = {
      showCreate: false,
      showDetail: false,
      selectedStaff: "",
      startTime: '',
      finishTime: '',
      updateStartTime: '',
      updateFinishTime: '',
      id: '',
      date: '',
    }
  }

  handleShowCreateModal = () => {
    this.setState({
      showCreate: true
    })
  }

  handleCloseCreateModal = () => {
    this.setState({
      showCreate: false
    })
  }

  onSubmitCreate = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createShift(this.state.selectedStaff);

  }

  handleOnChangeStaff = (e) => {
    this.setState({
      ...this.state,
      selectedStaff: e.target.value
    })
  }

  handleShowUpdateRoster = (e) => {
    const date = e.target.id.split(' ')[1];
    const id = e.target.id.split(' ')[0];

    const roster = this.props.rosters.find((roster) => roster.id == id);

    this.setState({
      ...this.state,
      showDetail: true,
      startTime: roster[date].startTime,
      finishTime: roster[date].finishTime,
      date: date,
      id: id,
    })
  }

  handleCloseUpdateRoster = (e) => {
    this.setState({
      ...this.state,
      showDetail: false
    })
  }

  handleChangeUpdateRoster = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    })
  }

  onSubmitUpdateRoster = (e) => {
    e.preventDefault();
    this.props.updateShift(this.state);
  }

  handleDeleteRoster = (e) => {
    this.props.deleteShift(e.target.id);
  }

  render() {
    const { staffs, rosters } = this.props;
    return (
      <div className="p-5">
        <div className="d-flex justify-content-between">
          <div><h3>Roster</h3></div>
          <div>
            <button
              onClick={this.handleShowCreateModal}
              type="button"
              className="btn btn-success btn-sm"> ADD MORE STAFF </button>
          </div>
        </div>

        <p> Click to each "cell" to assign a new shift to employee </p>

        <TimeSheet
          rosters={rosters}
          handleShowUpdateRoster={this.handleShowUpdateRoster}
          handleDeleteRoster={this.handleDeleteRoster}

        />

        <CreateShift
          staffs={staffs}
          show={this.state.showCreate}
          handleCloseCreateModal={this.handleCloseCreateModal}
          onSubmitCreate={this.onSubmitCreate}
          handleOnChangeStaff={this.handleOnChangeStaff}
        />

        <RosterDetails
          show={this.state.showDetail}
          handleCloseUpdateRoster={this.handleCloseUpdateRoster}
          handleChangeUpdateRoster={this.handleChangeUpdateRoster}
          startTime={this.state.startTime}
          finishTime={this.state.finishTime}
          onSubmitUpdateRoster={this.onSubmitUpdateRoster}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staffs: state.firestore.ordered.users,
    rosters: state.firestore.ordered.rosters
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createShift: (staff) => dispatch(createShift(staff)),
    updateShift: (shift) => dispatch(updateShift(shift)),
    deleteShift: (id) => dispatch(deleteShift(id)),
  }
}

export default compose(
  connect(mapStateToProps, dispatchToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'rosters' },
  ])
)(Roster);