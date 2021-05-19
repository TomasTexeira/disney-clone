import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK1g2tPeAx4GbpBMEzVdy3AQHQr-t1BGo",
  authDomain: "disneyplus-clone-d7a1f.firebaseapp.com",
  projectId: "disneyplus-clone-d7a1f",
  storageBucket: "disneyplus-clone-d7a1f.appspot.com",
  messagingSenderId: "206935095436",
  appId: "1:206935095436:web:07bc2c8929dc3b99fee3a9",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;