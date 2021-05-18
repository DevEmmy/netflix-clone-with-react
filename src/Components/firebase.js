import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB55HwlSe0ZRyKck3EACl-Z1d1tULj2Yxk",
    authDomain: "netflix-clone-82c10.firebaseapp.com",
    projectId: "netflix-clone-82c10",
    storageBucket: "netflix-clone-82c10.appspot.com",
    messagingSenderId: "437017283606",
    appId: "1:437017283606:web:b013b870ad3e1b9bf27937",
    measurementId: "G-Z95VEP40RL"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

export { auth }
export default db