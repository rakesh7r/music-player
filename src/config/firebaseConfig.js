import { initializeApp } from "firebase/app"

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyCD3s7SJ9IaIYw48Qi2AiNjJn-Tfb1nZYg",
    authDomain: "playmusic7r.firebaseapp.com",
    projectId: "playmusic7r",
    storageBucket: "playmusic7r.appspot.com",
    messagingSenderId: "659006940704",
    appId: "1:659006940704:web:946d51868889e5ea5f7e45",
    measurementId: "G-GKPZME1R99",
}

// Initialize Firebase
export const fire = initializeApp(firebaseConfig)
