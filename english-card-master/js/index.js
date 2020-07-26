window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBT2LNJFrx8zTMhAfDHucAur6sO16V81Kk",
    authDomain: "e-card-af996.firebaseapp.com",
    databaseURL: "https://e-card-af996.firebaseio.com",
    projectId: "e-card-af996",
    storageBucket: "e-card-af996.appspot.com",
    messagingSenderId: "239526021140",
    appId: "1:239526021140:web:a7f98a7af41ce5b1e83f01",
    measurementId: "G-RBPE86VNY4",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        view.setActiveScreen("mainScreen");
      }
    } else {
      view.setActiveScreen("loginScreen");
    }
  });
  // view.setActiveScreen("homeScreen")
};

