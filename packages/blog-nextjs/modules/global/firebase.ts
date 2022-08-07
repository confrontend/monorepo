import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import {
  FieldValue,
  Timestamp,
  getFirestore,
  collection,
  query,
  where,
  limit,
  getDocs,
} from "firebase/firestore";
import { getStorage, TaskEvent } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBL1K7gf3aZaJ7SukXNEYel5o2MmmOO7bY",
  authDomain: "blog-confrontend.firebaseapp.com",
  databaseURL: "https://blog-confrontend-default-rtdb.firebaseio.com",
  projectId: "blog-confrontend",
  storageBucket: "blog-confrontend.appspot.com",
  messagingSenderId: "378830255343",
  appId: "1:378830255343:web:355f7b439686a3ce77171a",
};

const app = initializeApp(firebaseConfig);

// Auth exports
export const auth: Auth = getAuth(app);
// export const googleAuth = new googleAuthProvider();

// Firestore exports
const fireStore = getFirestore(app);
// export const serverTimestamp = fireStore.serverTimestamp;
// export const fromMillis = Timestamp.fromMillis;
// export const increment = FieldValue.increment;

// Storage exports
export const storage = getStorage(app);
// export const STATE_CHANGED = TaskEvent;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(fireStore, "users");
  const userQuery = query(
    usersRef,
    where("username", "==", username),
    limit(1)
  );
  const querySnapshot = await getDocs(userQuery);
  const userDoc = querySnapshot[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
