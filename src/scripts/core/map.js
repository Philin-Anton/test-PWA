//import GoogleMapsLoader from '@google/maps';
import GoogleMapsLoader from 'google-maps';

class GoogleMap {
    constructor() {}

    async createClient({ key }) {
        this._KEY = key;
        GoogleMapsLoader.KEY = key;
        return new Promise(function (resolve, reject) {
            try {
                GoogleMapsLoader.load(function (google) {
                    resolve(google);
                });
            }catch (error) {
                reject(error);
            }
        });
    }

    async createMap(google, el, options={} ){
        const defaultOptions = {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        }
        options = Object.assign({}, defaultOptions, options);
        return new google.maps.Map(el, Object.assign({}, defaultOptions, options));
    }

}

export default GoogleMap;