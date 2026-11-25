// ═══════════════════════════════════════════════════════
// firebase-config.js
// Reemplaza los 6 valores con los datos de tu proyecto.
// Firebase Console → ⚙️ → Tu app web → SDK de Firebase
// ═══════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyBw9anXn8p8nfjF3EN8yqKenLy9-bLbR9s",
  authDomain: "agromarket-d6cbc.firebaseapp.com",
  projectId: "agromarket-d6cbc",
  storageBucket: "agromarket-d6cbc.firebasestorage.app",
  messagingSenderId: "893178357244",
  appId: "1:893178357244:web:7ce9150c472782c81abe79"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();

const DOMINIO = "@uleam.edu.ec";
