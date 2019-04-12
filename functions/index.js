const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notification')
    .add(notification)
    .then(doc => { console.log('Notification added', doc) })
}

exports.noteCreated = functions.firestore
  .document('notes/{noteId}')
  .onCreate(doc => {
    const note = doc.data();
    const notification = {
      content: 'Added a new note',
      user: `${note.staffFirstName} ${note.staffLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
  })


exports.userJoined = functions.auth.user()
  .onCreate((user) => {
    return admin.firestore().collection('users')
      .doc(user.uid).get()
      .then((doc) => {
        const newUser = doc.data();
        const notification = {
          content: "Joined the system",
          user: `${newUser.firstName} ${newUser.lastName} `,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);

      })
  })

