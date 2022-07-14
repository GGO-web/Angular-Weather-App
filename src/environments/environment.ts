// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   production: false,
   base: '/',
   weatherApiUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
   XRapidAPIKey: {
      name: 'X-RapidAPI-Key',
      value: '80a91e6fecmsh63b5611f6de401ap1ac1e7jsn0f8f3c1ab8d2'
   },
   XRapidAPIHost: {
      name: 'X-RapidAPI-Host',
      value: 'community-open-weather-map.p.rapidapi.com'
   },
   GeolocationApiUrl:
      'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
   GeolocationApiHost: {
      name: 'X-RapidAPI-Host',
      value: 'forward-reverse-geocoding.p.rapidapi.com'
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
