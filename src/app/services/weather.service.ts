import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
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
      return this.http.get<IWeather>(environment.weatherApiUrl, {
         headers: new HttpHeaders()
            .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value)
            .set(
               environment.XRapidAPIHost.name,
               environment.XRapidAPIHost.value
            ),
         params: new HttpParams()
            .set('q', location)
            .set('units', 'metric')
            .set('mode', 'json')
      });
   }
}
