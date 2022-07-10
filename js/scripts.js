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
 // if ('serviceWorker' in navigator) {
  //  navigator.serviceWorker.register('/OC_P4/sw.js', { scope: '/OC_P4/js/' }).then(function(reg) {
      // registration worked
  //    console.log('Registration succeeded. Scope is ' + reg.scope);
   // }).catch(function(error) {
      // registration failed
    //  console.log('Registration failed with ' + error);
  //  });
 // };

// Don't register the service worker
  // until the page has fully loaded
  window.addEventListener('load', () => {
    // Is service worker available?
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/OC_P4/sw.js').then(() => {
        console.log('Service worker registered!');
      }).catch((error) => {
        console.warn('Error registering service worker:');
        console.warn(error);
      });
    }
  });