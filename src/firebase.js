import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-tzz5YjFGQo0_GU6BBnw9MKlX4do4ysk",
  authDomain: "linkedin-clone-ffc41.firebaseapp.com",
  projectId: "linkedin-clone-ffc41",
  storageBucket: "linkedin-clone-ffc41.appspot.com",
  messagingSenderId: "312307131495",
  appId: "1:312307131495:web:f09846d4da53c12333e0c2",
  measurementId: "G-4NFZFW8X8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
