// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz-nmi3WxUZwrduoYdDO-1BONeXkhiB8s",
  authDomain: "restaurant-management-sy-5c1e7.firebaseapp.com",
  projectId: "restaurant-management-sy-5c1e7",
  storageBucket: "restaurant-management-sy-5c1e7.appspot.com",
  messagingSenderId: "774805980702",
  appId: "1:774805980702:web:29b5d8c6c7546afe5c900f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;