// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyAFrp3U5iVmaAkbe-oUbcSoPfl7OtVZxkE",
//     authDomain: "to-do-live-9b3e9.firebaseapp.com",
//     projectId: "to-do-live-9b3e9",
//     storageBucket: "to-do-live-9b3e9.appspot.com",
//     messagingSenderId: "894612096062",
//     appId: "1:894612096062:web:dbd4f0bda156a7f669fd6f",
//     measurementId: "G-7JJXJCEVCX"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const db = getFirestore();



var firebaseConfig = {
    apiKey: "AIzaSyAI1brKkR9XfOGErHdMQKyfj8GQbKR7tXA",
    authDomain: "to-do-list-519ae.firebaseapp.com",
    projectId: "to-do-list-519ae",
    storageBucket: "to-do-list-519ae.appspot.com",
    messagingSenderId: "897143349984",
    appId: "1:897143349984:web:e23f665d2848abc8fa2685",
    measurementId: "G-N6YDZCPM2S"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();