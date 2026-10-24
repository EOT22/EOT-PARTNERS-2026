// ==================== إعدادات Firebase (مشروع 2026) ====================
const firebaseConfig = {
  apiKey: "AIzaSyAT21-LAQFIH-Bkr2KKOcDM6gReyjHdCGc",
  authDomain: "eot-partners-2026.firebaseapp.com",
  projectId: "eot-partners-2026",
  storageBucket: "eot-partners-2026.firebasestorage.app",
  messagingSenderId: "836547222945",
  appId: "1:836547222945:web:a812a35af8904bbf06ffe0",
  measurementId: "G-7XCRF7FTSM"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// تفعيل Firestore
const db = firebase.firestore();

console.log('✅ Firebase جاهز للعمل - مشروع 2026');