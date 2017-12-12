import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';


import '../styles/main.scss';
import GoogleMap from './core/map.js';


if ('serviceWorker' in navigator) {
    window.addEventListener('load', async function () {
        const googleMap = new GoogleMap()
        const googleMapsClient = await googleMap.createClient({
            key: 'AIzaSyAaWyCyOrGFn4mC86CbIZ6fRSsYA6K68Ok'
        });
        const map = await googleMap.createMap(googleMapsClient, document.getElementById('map'));
        
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js')
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        } catch (error) {
            console.log('ServiceWorker registration failed: ', error);
        }
    });
}