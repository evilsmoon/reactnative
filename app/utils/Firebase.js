import firebase from 'firebase/app';
  const firebaseConfig = {
    apiKey: "AIzaSyBlfW6Z7mVwC59bAW99VXsaBl_MMWSy7jI",
    authDomain: "tops-restaurants.firebaseapp.com",
    databaseURL: "https://tops-restaurants.firebaseio.com",
    projectId: "tops-restaurants",
    storageBucket: "tops-restaurants.appspot.com",
    messagingSenderId: "979398556228",
    appId: "1:979398556228:web:feb88156e4f43e97d11a11"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);