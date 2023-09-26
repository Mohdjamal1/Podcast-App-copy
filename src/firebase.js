// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB8Esu_YApExcFktAWol9NAlvRwbina0qc",
  authDomain: "podacast-app-20bf6.firebaseapp.com",
  projectId: "podacast-app-20bf6",
  storageBucket: "podacast-app-20bf6.appspot.com",
  messagingSenderId: "1088915987886",
  appId: "1:1088915987886:web:f60027e3a638417072bc3f",
  measurementId: "G-02HCMBCCD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };