
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTaTNiFb7fuFavwvXgFqdNA15nN0iTtc",
  authDomain: "chatapp-9494f.firebaseapp.com",
  projectId: "chatapp-9494f",
  storageBucket: "chatapp-9494f.appspot.com",
  messagingSenderId: "634634936743",
  appId: "1:634634936743:web:b44e3dbed9124b343c5682"
  const app = initializeApp(firebaseConfig);
};

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();