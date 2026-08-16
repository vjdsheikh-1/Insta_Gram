// Firebase Configuration
// Replace these with your Firebase project credentials from Firebase Console:
// (Go to Firebase Console -> Project Settings -> General -> Your apps -> Web app)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Check if Firebase is initialized
let db = null;
try {
  if (firebaseConfig.projectId !== "YOUR_PROJECT_ID") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized successfully!");
  } else {
    console.warn("Firebase config has default placeholder values. Using LocalStorage fallback mode.");
  }
} catch (e) {
  console.error("Firebase init error:", e);
}
