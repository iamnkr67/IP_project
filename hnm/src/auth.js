import 'firebase/auth'
import 'firebase/firebase'
import firebase from "./firebase";


export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // User signed up successfully
  } catch (error) {
    // Handle sign-up errors
    console.error(error.message);
  }};

export const doSignInWithEmailAndPassword = async (email, password) =>{
    try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // User signed in successfully
  } catch (error) {
    // Handle sign-in errors
    console.error(error.message);
  }
};

// export const doSignInWithGoogle = async () =>{
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     //result.user
//     return result
// }

// export const doSignOut = async () =>{
//     return signOut(auth);
// };

// export const doPasswordReset = async (email) =>{
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = async (password) =>{
//     return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = async () =>{
//     return sendEmailVerification(auth.currentUser,{
//         url: '${window.location.origin}/login'
//     });
//}

// export const doSignInWithFacebook = async () =>{
//     const provider = new FacebookAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     //result.user
//     return result
// }    
// export const doSignInWithTwitter = async () =>{
//     const provider = new TwitterAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     //result.user
//     return result