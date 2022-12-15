// === Firebase ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd3LutZE8sVb49FmIa58-FIQb56FaKzUU",
  authDomain: "back-to-basics-james.firebaseapp.com",
  projectId: "back-to-basics-james",
  storageBucket: "back-to-basics-james.appspot.com",
  messagingSenderId: "628180321515",
  appId: "1:628180321515:web:3f698b424e9416ceda2aae"
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

const numberParticipantsElement = document.getElementById("numberParticipants");

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

    getNumberParticipants();
});

async function getNumberParticipants() {
    let participantQuery = query(collection(db, "participants"), where("day", "==", "2"));
    let firebaseResponse = await getDocs(participantQuery);

    console.log(firebaseResponse);

    let nParticipants = firebaseResponse.docs.length;

    numberParticipantsElement.innerHTML = nParticipants + " registered participants";
}

getNumberParticipants();

// === Logic for the tickle counter ===

const haribotBtn = document.getElementById("haribotBtn");
const honeydroidBtn = document.getElementById("honeydroidBtn");
const popstronBtn = document.getElementById("popstronBtn");
const babybusterBtn = document.getElementById("babybusterBtn");
const siborgBtn = document.getElementById("siborgBtn");

haribotBtn.addEventListener("click", () => {
    // Every time the haribot button is pressed
    // Send a request to firestore to add a document
    // containing:
    // {
    //     bot: "haribot"
    // }

    console.log("Haribot was tickled");

    let objectToBeSent = {
        bot: "haribot"
    };

    try {
        addDoc(collection(db, "tickles"), objectToBeSent);
    } catch (error) {
        // If the request encounters an error like
        // internet connection issues, permission issues, etc
        // do a window alert with the format
        // Error on tickle: <Actual error/reason>
        window.alert("Error on tickle: " + error);
    }
})

// Repeat the logic for haribotBtn for all of the bots
honeydroidBtn.addEventListener("click", () => {
    console.log("HoneyDroid was tickled");

    let objectToBeSent = {
        bot: "honey droid"
    };

    try {
        addDoc(collection(db, "tickles"), objectToBeSent);
    } catch (error) {
        window.alert("Error on tickle: " + error);
    }
})

popstronBtn.addEventListener("click", () => {
    console.log("Popstron was tickled");

    let objectToBeSent = {
        bot: "popstron"
    };

    try {
        addDoc(collection(db, "tickles"), objectToBeSent);
    } catch (error) {
        window.alert("Error on tickle: " + error);
    }
})

babybusterBtn.addEventListener("click", () => {
    console.log("BabyBuster was tickled");

    let objectToBeSent = {
        bot: "baby buster"
    };

    try {
        addDoc(collection(db, "tickles"), objectToBeSent);
    } catch (error) {
        window.alert("Error on tickle: " + error);
    }
})

siborgBtn.addEventListener("click", () => {
    console.log("Siborg was tickled");

    let objectToBeSent = {
        bot: "siborg"
    };

    try {
        addDoc(collection(db, "tickles"), objectToBeSent);
    } catch (error) {
        window.alert("Error on tickle: " + error);
    }
})

// Let's now make it so that on page load or when every
// time a bot gets tickled, it updates the counter by
// requesting the updated data from firestore

const haribotCount = document.getElementById("haribotCount");
const honeydroidCount = document.getElementById("honeydroidCount");
const popstronCount = document.getElementById("popstronCount");
const babybusterCount = document.getElementById("babybusterCount");
const siborgCount = document.getElementById("siborgCount");

async function getHaribotTickles() {
    // I just separated the query into multiple lines
    // so it can be read easier, but you don't have to
    let haribotQuery = query(
        collection(db, "tickles"),    // Pay attention to the where clause
        where("bot", "==", "haribot") // we're instructing firestore that we only want
    );                                // docs that has the value { bot: "haribot" }

    // The getDocs function takes our haribotQuery and sends
    // a request to firestore. We will Firestore's response
    // and once they do respond, we will store it to the
    // firebaseResponse variable
    let firebaseResponse = await getDocs(haribotQuery);

    console.log(firebaseResponse); // Go to the console and explore what firebaseResponse looks like

    let tickleCount = firebaseResponse.docs.length;

    haribotCount.innerHTML = tickleCount;
}

getHaribotTickles(); // Run the function when the page loads

haribotBtn.addEventListener("click", () => {
    // Also run the function everytime the haribot
    // button gets pressed
    getHaribotTickles();

    // NOTE: You don't have to put this on a different
    // event listener. A better way is to put this on the same
    // listener above

    // I only did this so it's easier to follow
});


// Try implementing the counters for the rest of the bots!
// Note: If you've just recently cloned this repo
// don't forget to change the firestore configs to match your own