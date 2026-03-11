// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOyUJ0Kd0uhXAZVjocB343Ff8ZV6ZbwIQ",
  authDomain: "campus-sustainability-tracker.firebaseapp.com",
  databaseURL: "https://campus-sustainability-tracker-default-rtdb.firebaseio.com/",
  projectId: "campus-sustainability-tracker",
  storageBucket: "campus-sustainability-tracker.firebasestorage.app",
  messagingSenderId: "776159971568",
  appId: "1:776159971568:web:bdde1035a637a54dee9a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const database = getDatabase(app);
const auth = getAuth(app);

// Export
export { database, ref, push, auth };