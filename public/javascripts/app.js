// register service worker

function appendM(){
  	var head = document.querySelector('head');
  	var manifest = document.createElement("link"); 
  	manifest.href = '/manifest.json';
  	manifest.rel = 'manifest';
  	head.appendChild(manifest);

  	var theme = document.createElement("meta");
  	theme.name="theme-color";
  	theme.content = "#FAFAFA";
  	head.appendChild(theme);
}

//appendM();

if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('/worker.js').then(function(reg) {
    var response = new Response(' {  "short_name": "ShaiiiCDN",  "name": "Shaiii CDN",  "start_url": "/ServiceWorkers.html",  "icons": [  {  "src": "/images/icon-192x192.png",  "sizes": "192x192",  "type": "image/png"  }, {  "src": "/images/icon-512x512.png",  "sizes": "512x512",  "type": "image/png"  } ],  "background_color": "#FAFAFA", "theme_color": "#512DA8", "display": "standalone",  "orientation": "portrait"  } ', {
  	headers: { 'Content-Type': 'text/json' }
    });
    caches.open('v1').then(function(cache){
   	cache.put(window.location.href+'manifest.json', response);
	appendM();
    });

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
