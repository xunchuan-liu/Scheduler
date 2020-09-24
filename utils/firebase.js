import firebase from "firebase";

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDFdl6JLhhYJkyYY4Pi28_4H5ltmdiv1ao",
    authDomain: "scheduler-1161e.firebaseapp.com",
    databaseURL: "https://scheduler-1161e.firebaseio.com",
    projectId: "scheduler-1161e",
    storageBucket: "scheduler-1161e.appspot.com",
    messagingSenderId: "37501241372",
    appId: "1:37501241372:web:1525e124fd7bd61430f7d9"
};

firebase.initializeApp(firebaseConfig);

export { firebase };