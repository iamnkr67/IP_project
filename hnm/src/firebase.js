// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { Database } from "firebase/database";
// import { getDatabase } from "firebase/database";
// import { ref, set } from "firebase/database";
// import auth from "./auth";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDGf_94uskCw5xhm8WpCN7DyFH0QCkZYqc",
//     authDomain: "hunger-no-more-4f8f3.firebaseapp.com",
//     projectId: "hunger-no-more-4f8f3",
//     storageBucket: "hunger-no-more-4f8f3.appspot.com",
//     messagingSenderId: "397589334042",
//     appId: "1:397589334042:web:2dc2f5839ba3fc9a2269a3",
//     measurementId: "G-P9E8JXX6CJ",
//     databaseURL: "https://hunger-no-more-4f8f3-default-rtdb.firebaseio.com/"
// };


// export const app = initializeApp(firebaseConfig);
// export default auth;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGf_94uskCw5xhm8WpCN7DyFH0QCkZYqc",
  authDomain: "hunger-no-more-4f8f3.firebaseapp.com",
  projectId: "hunger-no-more-4f8f3",
  storageBucket: "hunger-no-more-4f8f3.appspot.com",
  messagingSenderId: "397589334042",
  appId: "1:397589334042:web:2dc2f5839ba3fc9a2269a3",
  measurementId: "G-P9E8JXX6CJ",
  database : "https://hunger-no-more-4f8f3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;
