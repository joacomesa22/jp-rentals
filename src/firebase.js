import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCf3AIxa0V9H0HzUYZ7fPW7Dmhpk-4raw4",
  authDomain: "jp-rentals.firebaseapp.com",
  projectId: "jp-rentals",
  storageBucket: "jp-rentals.appspot.com",
  messagingSenderId: "603151371759",
  appId: "1:603151371759:web:f0d5a3d36a6c18d5723a1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
