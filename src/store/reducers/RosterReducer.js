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
      console.log('created shift error', action.err)
      return state;
    case "CREATE_SHIFT":
      console.log('created shift success', action.staff)
      return state;

    default:
      return state;
  }
}

export default rosterReducer;