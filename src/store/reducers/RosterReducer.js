const initState = {
  rosters: [
    {
      id: 1,
      staffName: "Ayush Thapa",
      mon: '7:00 to 15:30',
      tue: '7:00 to 15:30',
      wed: '7:00 to 15:30',
      thu: '7:00 to 15:30',
      fri: '7:00 to 15:30',
      sat: '7:00 to 15:30',
      sun: '7:00 to 15:30',
      createFor: '12 April 2019'
    }
  ]
}

const rosterReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ERROR":
      console.log('Created shift error', action.err)
      return state;

    case "CREATE_SHIFT":
      console.log('Created shift success', action.staff)
      return state;

    case "UPDATE_SHIFT":
      console.log('Updated shift success', action.shift)
      return state;

    case "UPDATE_ERROR":
      console.log('Updated shift error', action.err)
      return state;

    case "DELETE_SHIFT":
      console.log('Deleted shift success')
      return state;

    case "DELETE_ERROR":
      console.log('Deleted shift error', action.err)
      return state;
    default:
      return state;
  }
}

export default rosterReducer;