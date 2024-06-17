// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_APP_FIREBASE_API_KEY,
  authDomain: (import.meta as any).env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: (import.meta as any).env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: (import.meta as any).env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: (import.meta as any).env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: (import.meta as any).env.VITE_APP_FIREBASE_APP_ID,
  measurementId: (import.meta as any).env.VITE_APP_FIREBASE_MEASUREMENT_ID
};
export class FirebaseConfig {
  public  initializeFirebase =  initializeApp(firebaseConfig);
  public db = getFirestore();
}