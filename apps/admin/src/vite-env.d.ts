/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_FIREBASE: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
