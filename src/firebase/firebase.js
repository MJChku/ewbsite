import firebase1 from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
const config = {
  apiKey: "AIzaSyB2O9IvKJCRbaSD4wihrG2BrQS5aE7dOXY",
  authDomain: "educationwithoutbarriers-bc2fe.firebaseapp.com",
  databaseURL: "https://educationwithoutbarriers-bc2fe.firebaseio.com",
  projectId: "educationwithoutbarriers-bc2fe",
  storageBucket: "educationwithoutbarriers-bc2fe.appspot.com",
  messagingSenderId: "560457792460"
}

class Firebase {
  constructor() {
    if (typeof window !== 'undefined') {
      firebase1.initializeApp(config)
      /* Helper */

    //  this.serverValue = app.database.ServerValue;
      // this.emailAuthProvider = app.auth.EmailAuthProvider;

      /* Firebase APIs */

      this.auth = firebase1.auth();
      this.db = firebase1.database();

      /* Social Sign In Method Provider */

      this.googleProvider = new firebase1.auth.GoogleAuthProvider();
      this.facebookProvider = new firebase1.auth.FacebookAuthProvider();
      this.twitterProvider = new firebase1.auth.TwitterAuthProvider();
    }
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');
}

let firebase;

function getFirebase() {
  if (!firebase) {
    firebase = new Firebase();
  }

  return firebase;
}

export default getFirebase;








//
//
// class Firebase {
//   constructor () {
//
//       this.auth = firebase.auth()
//     }
//   }
// }

//export default getFirebase;