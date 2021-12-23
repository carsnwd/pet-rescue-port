import { FirebaseService } from "../FirebaseService/FirebaseService";
import {
  collection,
  query,
  getDocs,
  DocumentData,
  CollectionReference,
} from "firebase/firestore/lite";
import { AnimalData } from "../../interface";

const firebase = FirebaseService.getFirebaseInstance();

function _getAnimalCollection(): CollectionReference<DocumentData> {
  const db = firebase.getFirestore();
  return collection(db, "animals");
}

export async function getAnimals(): Promise<AnimalData[]> {
  const animalsCollection = _getAnimalCollection();
  const q = query(animalsCollection);
  const res = await getDocs(q);
  return res.docs.map((doc: any) => {
    return {
      species: doc.species as string,
      age: doc.age as string,
      gender: doc.gender as string,
      name: doc.name as string,
    };
  });
}

export function filterAnimals(): any {}

export function getAnimalById(): any {}

export function addAnimal(): any {}

export function removeAnimal(): any {}
