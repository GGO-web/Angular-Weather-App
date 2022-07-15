import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
      const [url, host] = [
         'https://community-open-weather-map.p.rapidapi.com/weather',
         {
            name: 'X-RapidAPI-Host',
            value: 'community-open-weather-map.p.rapidapi.com'
         }
      ];

      return this.http.get<IWeather>(url, {
         headers: new HttpHeaders().set(host.name, host.value),
         params: new HttpParams()
            .set('q', location)
            .set('units', 'metric')
            .set('mode', 'json')
      });
   }

   getForecastWeather(location: string): Observable<IForecast> {
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
