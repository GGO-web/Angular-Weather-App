import { Component } from '@angular/core';
import { IForecast } from 'src/app/models/forecast.model';
import { IWeather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
   selector: 'app-weather-card',
   templateUrl: './weather-card.component.html',
   styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
   public weatherData!: IWeather;
   public forecast!: IForecast;
   public env = environment;

   constructor(public weatherService: WeatherService) {}

   makeSearchRequest(searchQuery: string) {
      this.weatherService.weatherStatus.error = '';
      this.weatherService.weatherStatus.completed = false;
      this.weatherService.weatherStatus.loading = true;

      this.weatherService.getTodayWeather(searchQuery).subscribe({
         next: (data: IWeather) => {
            this.weatherData = data;

            this.weatherService.weatherStatus.loading = false;
            this.weatherService.weatherStatus.completed = true;

            this.weatherService
               .getForecastWeather(searchQuery)
               .subscribe(forecast => {
                  this.forecast = forecast;
               });
         },
         error: (error: Error) => {
            this.weatherService.weatherStatus.loading = false;
            this.weatherService.weatherStatus.error = error.message;
         }
      });
   }
}
