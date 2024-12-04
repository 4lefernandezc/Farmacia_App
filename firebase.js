// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { collection, getFirestore, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA77eZJQ7NcR7RmvZ5n4P3_hU0G3sGxBAI",
  authDomain: "farmacia-app-1b285.firebaseapp.com",
  projectId: "farmacia-app-1b285",
  storageBucket: "farmacia-app-1b285.firebasestorage.app",
  messagingSenderId: "366691662687",
  appId: "1:366691662687:web:c62ed1b190a39632b814ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const savefarmacia = async (data) => {
  addDoc(collection(db, "farmacia"), data);
  console.log(data);
}

export const getfarmacia = async () => {
  const querySnapshot = await getDocs(collection(db, "farmacia"));
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}