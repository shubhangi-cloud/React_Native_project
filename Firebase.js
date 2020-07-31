import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAZVbOcTbvULZ0it61OJI8snWd9jhB3A8",
    authDomain: "eventsnearme-273714.firebaseapp.com",
    databaseURL: "https://eventsnearme-273714.firebaseio.com",
    projectId: "eventsnearme-273714",
    storageBucket: "eventsnearme-273714.appspot.com",
    messagingSenderId: "207170308243",
    appId: "1:207170308243:web:37ad1a36f857e53f802566",
    measurementId: "G-9FDENBYYF0"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
