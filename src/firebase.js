
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYxwFXnn6vsPRRxUNwW-4fYs1UqqWo6uk",
  authDomain: "emporio-de-anna.firebaseapp.com",
  projectId: "emporio-de-anna",
  storageBucket: "emporio-de-anna.appspot.com",
  messagingSenderId: "278507051507",
  appId: "1:278507051507:web:ece3d9fe4d77402e1e5a86",
  measurementId: "G-N28NV2S9Z5"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const db = getFirestore(app);

