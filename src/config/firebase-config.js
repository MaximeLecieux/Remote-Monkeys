import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxvyEsoSTvMMHuVgb20s8svZzaekIxKG4",
  authDomain: "codersmonkeysformation.firebaseapp.com",
  projectId: "codersmonkeysformation",
  storageBucket: "codersmonkeysformation.appspot.com",
  messagingSenderId: "567152743448",
  appId: "1:567152743448:web:37ed3a74706bfcc9311f6d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


