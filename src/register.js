// === Firebase ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx3k9caVppN_DqKQUBTSJHXYNDqIa6V2w",
    authDomain: "back-to-basics-f113d.firebaseapp.com",
    projectId: "back-to-basics-f113d",
    storageBucket: "back-to-basics-f113d.appspot.com",
    messagingSenderId: "533750849713",
    appId: "1:533750849713:web:d8bdfd6d6331547ae0c290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log("Firebase initialized");


// === Logic for our register form ===

const registerBtn = document.getElementById('registerBtn');
const participantNameField = document.getElementById('participantName');
const dayField = document.getElementById('daySelect');

registerBtn.addEventListener('click', () => {
    console.log("Click!");

    let participantObject = {
        name: participantNameField.value,
        day: dayField.value
    };

    console.log(participantObject);

    try {
        addDoc(collection(db, "participants"), participantObject);
    } catch (error) {
        window.alert("Register error");
    }
});