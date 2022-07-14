import { ILocation } from './app/models/location.model';
import { IWeather } from './app/models/weather.model';

export const mockedWeatherData: IWeather = {
   coord: { lon: 24.0232, lat: 49.8383 },
   weather: [
      {
         id: 803,
         main: 'Clouds',
         description: 'broken clouds',
         icon: '04d'
      }
   ],
   base: 'stations',
   main: {
      temp: 18,
      feels_like: 17.92,
      temp_min: 18,
      temp_max: 18,
      pressure: 1014,
      humidity: 79,
      sea_level: 1014,
      grnd_level: 981
   },
   visibility: 10000,
   wind: { speed: 7.46, deg: 316, gust: 14.12 },
   clouds: { all: 80 },
   dt: 1657734850,
   sys: { country: 'UA', sunrise: 1657679377, sunset: 1657736952 },
   timezone: 10800,
   id: 702550,
   name: 'Lviv',
   cod: 200
};

export const mockedLocation: ILocation = {
   importance: 0.78325419687689,
   licence:
      'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
   class: 'place',
   osm_id: 26150791,
   display_name:
      'Lviv, Lviv Urban Hromada, Lviv Raion, Lviv Oblast, 79000, Ukraine',
   osm_type: 'node',
   lon: '24.0315921',
   place_id: 127053,
   boundingbox: ['49.681952', '50.001952', '23.8715921', '24.1915921'],
   lat: '49.841952',
   type: 'city'
};
