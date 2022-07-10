// Don't register the service worker
// until the page has fully loaded
window.addEventListener('load', () => {
    // Is service worker available?
 if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/OC_P4/js/sw.js', {scope: 'https://karvaneg.github.io/OC_P4/js'}).then(
      (registration) => {
        console.log('Service worker registration succeeded:', registration)
      },
        /*catch*/ (error) => {
           console.log('Service worker registration failed:', error)
      }
    )
  } else {
    console.log('Service workers are not supported.')
  }
})




// Don't register the service worker
  // until the page has fully loaded
 // window.addEventListener('load', () => {
    // Is service worker available?
   // if ('serviceWorker' in navigator) {
   //   navigator.serviceWorker.register('/OC_P4/sw.js').then(() => {
   //     console.log('Service worker registered!');
    //  }).catch((error) => {
     //   console.warn('Error registering service worker:');
      //  console.warn(error);
    //  });
   // }
 // });

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