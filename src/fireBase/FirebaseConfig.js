import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBDxZH0yQw-Cqrq5m9arzid2bBjtIBc6os",
  authDomain: "exchange-vs-2a02e.firebaseapp.com",
  projectId: "exchange-vs-2a02e",
  storageBucket: "exchange-vs-2a02e.appspot.com",
  messagingSenderId: "12198089779",
  appId: "1:12198089779:web:47725d73b16a6616d6bf46"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)