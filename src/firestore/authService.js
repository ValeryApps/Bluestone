import { toast } from "react-toastify";
import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";

export const signInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const signOutFromFirebase = () => {
  return firebase.auth().signOut();
};

export const registerInFirebase = async (cred) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(cred.email, cred.password);
    await result.user.updateProfile({
      displayName: cred.displayName,
    });
    return await setUserProfileData(cred);
  } catch (error) {
    throw error;
  }
};

export const socialLogin = async (selectedProvider) => {
  let provider;
  if (selectedProvider === "facebook") {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if (selectedProvider === "google") {
    provider = new firebase.auth.GoogleAuthProvider();
  }
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateUserPassword = (cred) => {
  const user = firebase.auth().currentUser;
  return user.updatePassword(cred.newPassword1);
};

export const uploadToFirebaseStorage = (file, filename) => {
  const user = firebase.auth().currentUser;
  const storageRef = firebase.storage().ref();
  return storageRef.child(`${user.uid}/user_images/${filename}`).put(file);
};
