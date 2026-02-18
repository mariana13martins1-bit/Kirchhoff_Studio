import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMgQHLzldz9bQEBOxUgy7E1sWvwbIegaM",
  authDomain: "kirchhoffstudio.firebaseapp.com",
  projectId: "kirchhoffstudio",
  storageBucket: "kirchhoffstudio.appspot.com",
  messagingSenderId: "100671286834",
  appId: "1:100671286834:web:6709a580ee017036da162b",
  measurementId: "G-E7L3P60ZGK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);