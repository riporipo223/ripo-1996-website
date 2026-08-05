import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlEbikO7FknyYOqfBwejP7mdTkkZoeWBk",
  authDomain: "ripo-c7b4b.firebaseapp.com",
  projectId: "ripo-c7b4b",
  storageBucket: "ripo-c7b4b.firebasestorage.app",
  messagingSenderId: "275591690113",
  appId: "1:275591690113:web:89339001c2dfb68d2a1a80",
  measurementId: "G-ZQE5EW0Z6Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);