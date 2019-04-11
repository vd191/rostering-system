import React from "react";
import moment from 'moment';

const Notification = ({ notifications }) => {
  return (

    <div className="card mb-3 mt-5" style={{ maxWidth: '540px' }}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">Notification</h5>

            <ul className="notification">
              {notifications && notifications.map((item, index) =>
                <li key={index}>
                  <span className="text-danger">{item.user} </span>
                  <span>{item.content} </span>
                  <span className="text-muted">
                    {moment(item.time.toDate()).fromNow()}
                  </span>
                </li>
              )}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;