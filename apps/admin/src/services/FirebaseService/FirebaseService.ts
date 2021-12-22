import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from "firebase/firestore/lite";

export class FirebaseService {
  private static instance: FirebaseService;

  private firebase: FirebaseApp;
  private db: Firestore;

  private constructor() {
    this.firebase = this.initializeFirebaseApp();
    this.db = getFirestore(this.firebase);
  }

  private initializeFirebaseApp(): FirebaseApp {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };
    return initializeApp(firebaseConfig);
  }

  public static getFirebaseInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  public getFirestore(): Firestore {
    return this.db;
  }
}
