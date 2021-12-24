import FirebaseService from "../FirebaseService/FirebaseService";
import {
  collection,
  query,
  getDocs,
  DocumentData,
  CollectionReference,
} from "firebase/firestore/lite";
import { AnimalData } from "../../interface";

const firebase = FirebaseService.getFirebaseInstance();

/**
 * @private
 * @returns the Firestore animals collection
 */
function _getAnimalCollection(): CollectionReference<DocumentData> {
  const db = firebase.getFirestore();
  if (!db) {
    throw Error("cannot connect to firestore");
  }
  return collection(db, "animals");
}

/**
 *
 * @returns All the animals in the database
 */
export async function getAnimals(): Promise<AnimalData[]> {
  try {
    const animalsCollection = _getAnimalCollection();
    const q = query(animalsCollection);
    const res = await getDocs(q);
    return (
      res?.docs?.map((doc: any) => {
        return {
          species: doc.species as string,
          age: doc.age as string,
          gender: doc.gender as string,
          name: doc.name as string,
        };
      }) ?? []
    );
  } catch (e) {
    return Promise.reject("failed to get animals");
  }
}

export function filterAnimals(): any {}

export function getAnimalById(): any {}

export function addAnimal(): any {}

export function removeAnimal(): any {}
