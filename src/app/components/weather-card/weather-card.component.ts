import { Component } from '@angular/core';
import { IWeather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
   selector: 'app-weather-card',
   templateUrl: './weather-card.component.html',
   styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
   public weatherData!: IWeather;

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
         },
         error: (error: Error) => {
            this.weatherService.weatherStatus.loading = false;
            this.weatherService.weatherStatus.error = error.message;
         }
      });
   }
}
