import firebase from "../config/firebase";

const db = firebase.firestore();

export const listenToServicesFromFirestore = () => {
  return db.collection("services");
};
export const listentToServiceFromFirestore = (serviceId) => {
  return db.collection("services").doc(serviceId);
};
export const dataFromSnapshot = (snapshot) => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();
  for (const prop in data) {
    if (data.hasOwnProperty(prop))
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
  }
  return {
    ...data,
    id: snapshot.id,
  };
};
export const listenToServicesFromFirebase = (predicate) => {
  const user = firebase.auth().currentUser;
  const servicesRef = db.collection("services").orderBy("date", "desc");
  switch (predicate.get("filter")) {
    case "isGoing":
      return servicesRef
        .where("attendeeIds", "array-contains", user.uid)
        .where("date", ">=", predicate.get("startDagte"));
    case "isHosting":
      return servicesRef
        .where("hostUid", "==", user.uid)
        .where("date", ">=", predicate.get("startDate"));

    default:
      return servicesRef.where("date", ">=", predicate.get("startDate"));
  }
};
export const listenToServiceFromFirebase = (id) => {
  return db.collection("services").doc(id);
};

export const addServiceToFirebase = (service) => {
  return db.collection("services").add({
    title: service.title,
    description: service.description,
  });
};

export const upateserviceInFirebase = (service) => {
  return db.collection("service").doc(service.id).update(service);
};

export const deleteServiceFromFirebase = (service) => {
  return db.collection("services").doc(service.id).delete();
};

export const toggleCancelService = (service) => {
  return db.collection("services").doc(service.id).update({
    isCancelled: !service.isCancelled,
  });
};

export const setUserProfileData = (user) => {
  return db
    .collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

export const getUserProfile = (userId) => {
  return db.collection("users").doc(userId);
};

export const updateUserProfile = async (profile) => {
  const user = firebase.auth().currentUser;
  try {
    if (user.displayName !== profile.displayName) {
      await user.updateProfile({
        displayName: profile.displayName,
      });
    }
    return await db.collection("users").doc(user.uid).update(profile);
  } catch (error) {
    throw error;
  }
};
export const updateUserProfilePhoto = async (downloadURL, filename) => {
  const user = firebase.auth().currentUser;
  const userDocRef = db.collection("users").doc(user.uid);
  try {
    const userDoc = await userDocRef.get();
    if (!userDoc.data().photoURL) {
      await db.collection("users").doc(user.uid).update({
        photoURL: downloadURL,
      });
      await user.updateProfile({
        photoURL: downloadURL,
      });
    }
    return await db.collection("users").doc(user.uid).collection("photos").add({
      name: filename,
      url: downloadURL,
    });
  } catch (error) {
    throw error;
  }
};
export const getUserPhotos = (userId) => {
  return db.collection("users").doc(userId).collection("photos");
};

export const setMainPhoto = async (photo) => {
  const user = firebase.auth().currentUser;
  try {
    await db.collection("users").doc(user.uid).update({
      photoURL: photo.url,
    });
    return user.updateProfile({
      photoURL: photo.url,
    });
  } catch (error) {
    throw error;
  }
};

export const addUserAttendance = async (service) => {
  const user = firebase.auth().currentUser;
  return db
    .collection("services")
    .doc(service.id)
    .update({
      attendees: firebase.firestore.FieldValue.arrayUnion({
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL || null,
      }),
      attendeeId: firebase.firestore.FieldValue.arrayUnion(user.uid),
    });
};

export const cancelUserAttendance = async (service) => {
  const user = firebase.auth().currentUser;
  try {
    const serviceDoc = await db.collection("services").doc(service.id).get();
    return db
      .collection("services")
      .doc(service.id)
      .update({
        attendeeId: firebase.firestore.FieldValue.arrayRemove(user.uid),
        attendees: serviceDoc.data().attendees.filter((x) => x.id !== user.uid),
      });
  } catch (error) {
    throw error;
  }
};

export const sendMessage = (user) => {
  return db.collection("messages").add({
    email: user.email,
    name: user.name,
    message: user.message,
  });
};
export const readMessages = ()=>{
  return db.collection('messages');
} 