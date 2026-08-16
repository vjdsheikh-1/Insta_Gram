// Your web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO2G7FFD4ECA9_43jjXscd0oQjmuv67cI",
  authDomain: "funn-93972.firebaseapp.com",
  projectId: "funn-93972",
  storageBucket: "funn-93972.firebasestorage.app",
  messagingSenderId: "229499142421",
  appId: "1:229499142421:web:17d3dccd7bfe250db1291c",
  measurementId: "G-RH0LVBHKFP"
};

// Initialize Firebase
let db = null;
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase Firestore connected successfully to funn-93972!");
  }
} catch (e) {
  console.error("Firebase init error:", e);
}
