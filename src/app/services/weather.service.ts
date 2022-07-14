import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockedLocation, mockedWeatherData } from 'src/constants';
import { environment } from 'src/environments/environment';
import { IForecast } from '../models/forecast.model';
import { ILocation } from '../models/location.model';
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

   constructor(private http: HttpClient) {}

   getTodayWeather(location: string): Observable<IWeather> {
      return of(mockedWeatherData);
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

   getCityLocation(location: string): Observable<ILocation[]> {
      return of([mockedLocation]);

      // const locationObservable: Observable<ILocation[]> = this.http.get<
      //    ILocation[]
      // >(environment.GeolocationApiUrl, {
      //    headers: new HttpHeaders()
      //       .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value)
      //       .set(
      //          environment.GeolocationApiHost.name,
      //          environment.GeolocationApiHost.value
      //       ),
      //    params: new HttpParams()
      //       .set('city', location)
      //       .set('format', 'json')
      //       .set('key', environment.XRapidAPIKey.value)
      // });

      // locationObservable.subscribe(response => console.log(response));

      // return locationObservable;
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
         headers: new HttpHeaders()
            .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value)
            .set(host.name, host.value),
         params: new HttpParams().set('city', location).set('days', 10)
      });
   }
}
