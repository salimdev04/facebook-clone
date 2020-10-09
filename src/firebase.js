import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8JjjrQxNSIerO1R17UWFQxmf5b1TnFrE",
    authDomain: "facebook-clone-996c3.firebaseapp.com",
    databaseURL: "https://facebook-clone-996c3.firebaseio.com",
    projectId: "facebook-clone-996c3",
    storageBucket: "facebook-clone-996c3.appspot.com",
    messagingSenderId: "421277815286",
    appId: "1:421277815286:web:805edc87f0fde6029a77d7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();  // Start a sign in process for an unauthenticated user.

export { auth, provider };
export default db;
