import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeSE0aXnd0CChr28Td4u3ISALafevXgI8",
  authDomain: "hostelkart-a35b7.firebaseapp.com",
  projectId: "hostelkart-a35b7",
  storageBucket: "hostelkart-a35b7.firebasestorage.app",
  messagingSenderId: "854610607391",
  appId: "1:854610607391:web:5952ee101738cd08f7442a",
  measurementId: "G-98D0SK58CC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager()
  })
});