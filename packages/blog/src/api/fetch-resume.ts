import { initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  getFirestore,
  query,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebase-config";
import { IResume } from "../pages/resume/resume.types";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function fetchResume(): Promise<IResume> {
  const db: Firestore = getFirestore(app);
  const q = query(collection(db, "resume"));

  const querySnapshot = await getDocs(q);

  let res: IResume = null as unknown as IResume;

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const str = doc.data();

    res = JSON.parse(str["jobs"]);
  });

  return res;
}
