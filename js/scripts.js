// Don't register the service worker
// until the page has fully loaded
window.addEventListener('load', () => {
    // Is service worker available?
 if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/OC_P4/js/sw.js', {scope: '/OC_P4/js/'}).then(
      (registration) => {
        console.log('Enregistrement réussi:', registration);
      }).catch((error) => {
           console.log('Erreur:' + error);
      }
    );
  } else {
    console.log('Service workers non supporté.')
  }
})