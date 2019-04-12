import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RosterDetails({ show, handleCloseUpdateRoster, handleChangeUpdateRoster, startTime, finishTime, onSubmitUpdateRoster }) {
  return (
    <Modal style={{ opacity: "1" }} show={show} onHide={handleCloseUpdateRoster} >
      <form onSubmit={onSubmitUpdateRoster} >
        <Modal.Header closeButton>
          <Modal.Title>Shift Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="form-group row">
            <div className="form-group col-md-6">
              <label>Start Time</label>
              <input defaultValue={startTime} id="updateStartTime" onChange={handleChangeUpdateRoster} />

            </div>
            <div className="form-group col-md-6">
              <label>Finish Time</label>
              <input defaultValue={finishTime} id="updateFinishTime" onChange={handleChangeUpdateRoster} />
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateRoster}>
            Close
      </Button>

          <input type="submit" className="btn btn-primary" variant="primary" value="Save Changes" />

        </Modal.Footer>
      </form>

    </Modal>
  )
}

export default RosterDetails;
