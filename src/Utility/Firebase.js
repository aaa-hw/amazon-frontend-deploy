
import firebase from "firebase/compat/app";

//auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNpj6PdZnV02iNYqoVBwmdnjalAR5d4Ow",
  authDomain: "clone-4614d.firebaseapp.com",
  projectId: "clone-4614d",
  storageBucket: "clone-4614d.appspot.com",
  messagingSenderId: "744744156187",
  appId: "1:744744156187:web:eba7e9f4743f69927e8cbe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
