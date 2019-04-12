import React from 'react';

const TimeSheet = ({ rosters, handleShowUpdateRoster }) => {
  return (
    <div className="row p-2" >
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col-2">STAFFs</th>
            <th className="col-1">MON</th>
            <th className="col-1">TUE</th>
            <th className="col-1">WED</th>
            <th className="col-1">THU</th>
            <th className="col-1">FRI</th>
            <th className="col-1">SAT</th>
            <th className="col-1">SUN</th>
          </tr>
        </thead>
        <tbody>

          {rosters && rosters.map((roster, index) =>
            <tr key={index}>
              <th scope="row">{roster.staffName}</th>
              <td id={`${roster.id} mon`} onClick={handleShowUpdateRoster}>{roster.mon.startTime} {roster.mon.startTime? "to" : ''} {roster.mon.finishTime} </td>
              <td id={`${roster.id} tue`} onClick={handleShowUpdateRoster}>{roster.tue.startTime} {roster.tue.startTime? "to" : ''} {roster.tue.finishTime} </td>
              <td id={`${roster.id} wed`} onClick={handleShowUpdateRoster}>{roster.wed.startTime} {roster.wed.startTime? "to" : ''} {roster.wed.finishTime} </td>
              <td id={`${roster.id} thu`} onClick={handleShowUpdateRoster}>{roster.thu.startTime} {roster.thu.startTime? "to" : ''} {roster.thu.finishTime} </td>
              <td id={`${roster.id} fri`} onClick={handleShowUpdateRoster}>{roster.fri.startTime} {roster.fri.startTime? "to" : ''} {roster.fri.finishTime} </td>
              <td id={`${roster.id} sat`} onClick={handleShowUpdateRoster}>{roster.sat.startTime} {roster.sat.startTime? "to" : ''} {roster.sat.finishTime} </td>
              <td id={`${roster.id} sun`} onClick={handleShowUpdateRoster}>{roster.sun.startTime} {roster.sun.startTime? "to" : ''} {roster.sun.finishTime} </td>
            </tr>
          )}

        </tbody>
      </table>



    </div>
  )
}



export default TimeSheet
