import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUo67DkxsHsofjX3BNbh5zwsPqh7Ympo4",
  authDomain: "chaos-51dd0.firebaseapp.com",
  projectId: "chaos-51dd0",
  storageBucket: "chaos-51dd0.firebasestorage.app",
  messagingSenderId: "96813593781",
  appId: "1:96813593781:web:894a6052e0a2e26624fafc",
  measurementId: "G-X9KWPNQ7LC",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;