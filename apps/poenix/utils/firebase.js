//I will install firebase & firestore as instructed here:
//https://www.youtube.com/watch?v=ig91zc-ERSE&ab_channel=Logicism

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAQjQ_KmNzd9e6prRjBdycBC2WbbVfz1U",
  authDomain: "fir-project-58fc3.firebaseapp.com",
  databaseURL: "https://fir-project-58fc3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-project-58fc3",
  storageBucket: "fir-project-58fc3.appspot.com",
  messagingSenderId: "515582196312",
  appId: "1:5155821  96312:web:b4baffd3a3503db41a282d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export default getFirestore();
export const db = getFirestore(app);
export default db
