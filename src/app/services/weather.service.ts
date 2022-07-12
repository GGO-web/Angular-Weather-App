import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeather } from '../models/weather.model';

@Injectable({
   providedIn: 'root'
})
export class WeatherService {
   constructor(private http: HttpClient) {}

   getTodayWeather(location: string): Observable<IWeather> {
      const mockedWeatherResponse = of<IWeather>({
         coord: {
            lon: 24.0232,
            lat: 49.8383
         },
         weather: [
            {
               id: 804,
               main: 'Clouds',
               description: 'хмарно',
               icon: '04d'
            }
         ],
         base: 'stations',
         main: {
            temp: 17.84,
            feelslike: 17.12,
            tempmin: 17.84,
            tempmax: 17.84,
            pressure: 1014,
            humidity: 55,
            sealevel: 1014,
            grnd_level: 981
         },
         visibility: 10000,
         wind: {
            speed: 6.58,
            deg: 278,
            gust: 12.09
         },
         clouds: {
            all: 100
         },
         dt: 1657638662,
         sys: {
            country: 'UA',
            sunrise: 1657592916,
            sunset: 1657650599
         },
         timezone: 10800,
         id: 702550,
         name: 'Lviv',
         cod: 200
      });

      return mockedWeatherResponse;

      // return this.http.get<IWeather>(environment.weatherApiUrl, {
      //    headers: new HttpHeaders()
      //       .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value)
      //       .set(
      //          environment.XRapidAPIHost.name,
      //          environment.XRapidAPIHost.value
      //       ),
      //    params: new HttpParams()
      //       .set('q', location)
      //       .set('units', 'metric')
      //       .set('mode', 'json')
      // });
   }
}
