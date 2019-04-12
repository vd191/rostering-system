import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CreateShift({ handleCloseCreateModal, show, onSubmitCreate, handleOnChangeStaff, staffs }) {
  return (
    <Modal style={{ opacity: "1" }} show={show} onHide={handleCloseCreateModal} >
      <form onSubmit={onSubmitCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Create new shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="staff">Staff</label>

            <select onChange={handleOnChangeStaff} className="form-control" id="staff">
              <option></option>
              {
                staffs && staffs.map((staff, index) =>
                  <option key={index}>{staff.firstName} {staff.lastName}</option>)
              }

            </select>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal} >
            Close
      </Button>

          <input type="submit" className="btn btn-primary" variant="primary" value="Save Changes" />

        </Modal.Footer>
      </form>

    </Modal>

  )
}

export default CreateShift;
