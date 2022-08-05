import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockedForecast, mockedWeatherData } from 'src/constants';
import { environment } from 'src/environments/environment';
import { IForecast } from '../models/forecast.model';
import { IWeather, IWeatherStatus } from '../models/weather.model';

@Injectable({
   providedIn: 'root'
})
export class WeatherService {
   public weatherStatus: IWeatherStatus = {
      loading: false,
      error: '',
      completed: false
   };

   constructor(public http: HttpClient) {}

   getTodayWeather(location: string): Observable<IWeather> {
      // return of(mockedWeatherData);

      const [url, host] = [
         'https://weatherbit-v1-mashape.p.rapidapi.com/current',
         {
            name: 'X-RapidAPI-Host',
            value: 'weatherbit-v1-mashape.p.rapidapi.com'
         }
      ];

      return this.http.get<IWeather>(url, {
         headers: new HttpHeaders()
            .set(host.name, host.value)
            .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value),
         params: new HttpParams()
            .set('city', location)
            .set('units', 'metric')
            .set('mode', 'json')
      });
   }

   getForecastWeather(location: string): Observable<IForecast> {
      // return of(mockedForecast);

      const [url, host] = [
         'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
         {
            name: 'X-RapidAPI-Host',
            value: 'weatherbit-v1-mashape.p.rapidapi.com'
         }
      ];

      return this.http.get<IForecast>(url, {
         headers: new HttpHeaders().set(host.name, host.value),
         params: new HttpParams().set('city', location).set('days', 10)
      });
   }
}
