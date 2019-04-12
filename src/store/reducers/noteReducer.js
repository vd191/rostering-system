
const initState = {
  notes: [
    { id: 1, title: "Shift Expected for next week", content: "I would like to have more shift for next week please!! " },
    { id: 2, title: "Holiday", content: " I am in holiday, so please dont give me any shift next week " }
  ]
}

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      console.log('created note', action.note);
      return state;
    case 'CREATE_NOTE_ERR':
      console.log('created note error', action.err)
      return state;
    default:
      return state;
  }
}

export default noteReducer;