//if ('serviceWorker' in navigator) {
 //   navigator.serviceWorker
  //    .register("/sw.js")
   //   .then(serviceWorker => {
    //    console.log("Service Worker registered: ", serviceWorker);
   //   })
   //   .catch(error => {
    //    console.error("Error registering the Service Worker: ", error);
    //  });
 // }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  };