/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "Web Starter",
    "subtitle": "Simple, yet powerful!",
    "language": "en",
    "baseUrl": "/zuix-web-starter/",
    "resourcePath": "/zuix-web-starter/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/1.2/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "siteMapUrl": "https://zuixjs.github.io/zuix-web-starter/"
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/zuix-web-starter/service-worker.js');
    });
  }
})();
