export const createShift = (staff) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database here
    const firestore = getFirestore();

    firestore.collection('rosters').add({
      staffName: staff,
      mon: { startTime: "", finishTime: "" },
      tue: { startTime: "", finishTime: "" },
      wed: { startTime: "", finishTime: "" },
      thu: { startTime: "", finishTime: "" },
      fri: { startTime: "", finishTime: "" },
      sat: { startTime: "", finishTime: "" },
      sun: { startTime: "", finishTime: "" },
    })
      .then(() => {
        dispatch({ type: 'CREATE_SHIFT', staff: staff });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_ERROR', err })
      })
  }
}

export const updateShift = (shift) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    console.log(shift);
    debugger;

    firestore.collection('rosters').doc(shift.id).update({
      [shift.date]: {
        startTime: shift.updateStartTime, 
        finishTime: shift.updateFinishTime
      }
    })
  }

}

