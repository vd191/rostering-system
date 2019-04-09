export const createNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database here
    const firestore = getFirestore();
    firestore.collection('notes').add({
      ...note,
      staffFirstName: 'Messi',
      staffLastName: "Lionel",
      staffId: 1212,
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