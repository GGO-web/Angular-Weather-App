import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
   selector: 'app-weather-card',
   templateUrl: './weather-card.component.html',
   styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
   public response!: IWeather;

   constructor(private weatherService: WeatherService) {}

   makeSearchRequest(searchQuery: string) {
      console.log(searchQuery);

      this.weatherService.getTodayWeather(searchQuery).subscribe(data => {
         this.response = data;
      });
   }
}
