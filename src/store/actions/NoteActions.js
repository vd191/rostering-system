export const createNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database here
    const firestore = getFirestore();
    
    const profile = getState().firebase.profile;
    const staffId = getState().firebase.auth.uid;
    
    firestore.collection('notes').add({
      ...note,
      staffFirstName: profile.firstName,
      staffLastName: profile.lastName,
      staffId: staffId,
      createdAt: new Date()

    }) 
    .then(() => {
      dispatch({ type: 'CREATE_NOTE', note });
    })
    .catch((err)=> {
      dispatch({type: 'CREATE_NOTE_ERROR', err});
    });
  }
}