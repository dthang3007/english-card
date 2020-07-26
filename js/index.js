window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          model.currentUser = {
            displayName: user.displayName,
            email: user.email,
          };
          view.setActiveScreen("collectionUserScreen");
        }
      } else {
        view.setActiveScreen("loginScreen");
      }
    });
  };
  
