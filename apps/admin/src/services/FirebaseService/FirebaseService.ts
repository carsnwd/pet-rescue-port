import { FirebaseApp, initializeApp } from "firebase/app";
import.meta.env.VITE_FIREBASE;

export class FirebaseService {
  private static instance: FirebaseService;

  private firebase: FirebaseApp;

  private constructor() {
    this.firebase = this.initializeFirebaseApp();
  }

  private initializeFirebaseApp(): FirebaseApp {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE.apiKey,
      authDomain: import.meta.env.VITE_FIREBASE.authDomain,
      projectId: import.meta.env.VITE_FIREBASE.projectId,
      storageBucket: import.meta.env.VITE_FIREBASE.storageBucket,
      messagingSenderId: import.meta.env.VITE_FIREBASE.messagingSenderId,
      appId: import.meta.env.VITE_FIREBASE.appId,
      measurementId: import.meta.env.VITE_FIREBASE.measurementId,
    };
    return initializeApp(firebaseConfig);
  }

  public static getFirebaseInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }
}
