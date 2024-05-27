import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  collection,
  setDoc,
  deleteDoc,
  addDoc,
  query,
  where
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBwiUdwkmSH3a9bUR8IUHyHIPeRTd5fWlI",
  authDomain: "storyforge-606f2.firebaseapp.com",
  projectId: "storyforge-606f2",
  storageBucket: "storyforge-606f2.appspot.com",
  messagingSenderId: "283072068015",
  appId: "1:283072068015:web:92a9c1b2153c3f3b7ad75a",
  measurementId: "G-7WX6T3CSX7",
};
const firebaseapp = initializeApp(firebaseConfig);
const fireStoreObject = getFirestore(firebaseapp);

async function addUser(userData) {
  try {
    const userObject = collection(fireStoreObject, "users");
    const q = query(userObject, where("email", "==", userData.email));
    const q2 = query(userObject, where("userName", "==", userData.userName));
    const querySnapshot = await getDocs(q);
    const query2Snapshot = await getDocs(q2);
    if (!querySnapshot.empty) {
      return { error: "Email already exists" };
    }
    else if(!query2Snapshot.empty){
      return { error: "UserName already exists" };
    }
    const docRef = await addDoc(userObject, userData);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding user:", error);
    return { error: error.message };
  }
}
export default addUser;
