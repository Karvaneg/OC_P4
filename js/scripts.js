// Don't register the service worker
// until the page has fully loaded
window.addEventListener('load', () => {
    // Is service worker available?
 if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/OC_P4/sw.js').then(
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