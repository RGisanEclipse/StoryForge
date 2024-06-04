import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  collection,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import axios from "axios";
import 'dotenv/config';
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const firebaseapp = initializeApp(firebaseConfig);
const fireStoreObject = getFirestore(firebaseapp);

export async function addUser(userData) {
  try {
    const userObject = collection(fireStoreObject, "users");
    const q = query(userObject, where("email", "==", userData.email));
    const q2 = query(userObject, where("userName", "==", userData.userName));
    const querySnapshot = await getDocs(q);
    const query2Snapshot = await getDocs(q2);
    if (!querySnapshot.empty) {
      return { error: "Email already exists" };
    } else if (!query2Snapshot.empty) {
      return { error: "UserName already exists" };
    }
    const docRef = await addDoc(userObject, userData);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding user:", error);
    return { error: error.message };
  }
}
export async function verifyUser(userData) {
  try {
    const userObject = collection(fireStoreObject, "users");
    const q = query(userObject, where("email", "==", userData.email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userFetchedData = userDoc.data();
      const response = await axios.post(
        "http://localhost:8080/verify-password",
        {
          password: userData.password,
          hashedPassword: userFetchedData.password,
        }
      );
      return { ...response.data, userId: userDoc.id };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    console.error("Error verifying user:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function fetchUserData(userID) {
  try {
    const userObject = collection(fireStoreObject, "users");
    const userDocRef = doc(userObject, userID);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      return userData;
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export async function uploadStory(userData) {
  try {
    const storyObject = collection(fireStoreObject, "stories");
    const docRef = await addDoc(storyObject, userData);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error uploading story:", error);
    return { error: error.message };
  }
}

export async function updateProfile(userData) {
  try {
    const userRef = doc(fireStoreObject, "users", userData.userID);

    if (userData.firstName.trim() !== "") {
      await updateDoc(userRef, { firstName: userData.firstName });
    }

    if (userData.lastName.trim() !== "") {
      await updateDoc(userRef, { lastName: userData.lastName });
    }

    if (userData.userName.trim() !== "") {
      await updateDoc(userRef, { userName: userData.userName });
    }

    if (userData.password.trim() !== "") {
      await updateDoc(userRef, { password: userData.password });
    }

    if (userData.fileName) {
      const avatarSrc = `http://localhost:8080/uploads/${userData.fileName}`;
      await updateDoc(userRef, { avatarSrc });
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating Profile:", error);
    return { error: error.message };
  }
}

export async function fetchStoriesWithUserData() {
  try {
    const storiesCollection = collection(fireStoreObject, "stories");
    const querySnapshot = await getDocs(storiesCollection);
    const stories = [];

    for (const docRef of querySnapshot.docs) {
      const storyData = docRef.data();
      const userData = await fetchUserData(storyData.userID);
      const { userName, avatarSrc } = userData;
      const contentWords = storyData.content.split(" ");
      const overviewWords = contentWords.slice(0, 50);
      let overview = overviewWords.join(" ");
      if (contentWords.length > 50) {
        overview += " ...";
      }
      const storyWithUserData = {
        ...storyData,
        userName,
        avatarSrc,
        overview,
        content: storyData.content,
      };

      stories.push(storyWithUserData);
    }

    return stories;
  } catch (error) {
    console.error("Error fetching stories with user data:", error);
    throw error;
  }
}

export async function fetchPostDataWithUserData(postID) {
  try {
    const postRef = doc(collection(fireStoreObject, "posts"), postID);
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      const postData = postSnapshot.data();
      const userID = postData.userID;
      const userRef = doc(collection(fireStoreObject, "users"), userID);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const { userName, avatarSrc } = userData;
        return { ...postData, userName, avatarSrc };
      } else {
        throw new Error("User data not found");
      }
    } else {
      throw new Error("Post data not found");
    }
  } catch (error) {
    console.error("Error fetching post data with user data:", error);
    throw error;
  }
}

