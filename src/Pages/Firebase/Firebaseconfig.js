import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDC38lAhOYOyVW-YWyefSW_2RWI-ITJSrY",
  authDomain: "facegram-58ff8.firebaseapp.com",
  projectId: "facegram-58ff8",
  storageBucket: "facegram-58ff8.appspot.com",
  messagingSenderId: "14203417655",
  appId: "1:14203417655:web:07cfb2a6a32e905422fbb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { imgDB, txtDB };
export {auth,provider};