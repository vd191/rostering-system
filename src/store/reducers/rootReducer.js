import authReducer from './authReducer';
import noteReducer from './noteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

