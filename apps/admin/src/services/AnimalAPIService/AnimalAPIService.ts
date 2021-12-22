import { FirebaseService } from "../FirebaseService/FirebaseService";
import {
  collection,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";

const firebase = FirebaseService.getFirebaseInstance();
const db = firebase.getFirestore();

export async function getAnimals(): Promise<DocumentData> {
  const animalsRef = collection(db, "animals");
  const q = query(animalsRef);
  const res = await getDocs(q);
  return res.docs.map((doc) => {
    return doc.data();
  });
}

export function filterAnimals(): any {}

export function getAnimalById(): any {}

export function addAnimal(): any {}

export function removeAnimal(): any {}
