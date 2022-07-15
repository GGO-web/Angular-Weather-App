import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { mockedForecast, mockedWeatherData } from 'src/constants';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
   let service: WeatherService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientModule]
      });
      service = TestBed.inject(WeatherService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   it('should return fake data or Error from getTodayWeather httpClient request', () => {
      const spy = spyOn(service.http, 'get').and.returnValue(
         of(mockedWeatherData)
      );

      service.getTodayWeather('Lviv').subscribe(data => {
         expect(data).toEqual(mockedWeatherData);
      });

      spy.and.returnValue(throwError(() => new Error('Some error')));

      service.getTodayWeather('Kyiv').subscribe({
         error: (err: Error): void => {
            expect(err.message).toBe('Some error');
         }
      });
   });

   it('should return fake data or Error from getForecast httpClient request', () => {
      const spy = spyOn(service.http, 'get').and.returnValue(
         of(mockedForecast)
      );

      service.getForecastWeather('Warsaw').subscribe(data => {
         expect(data).toEqual(mockedForecast);
      });

      spy.and.returnValue(throwError(() => new Error('Forecast failed')));

      service.getForecastWeather('Washington, D.C').subscribe({
         error: (err: Error): void => {
            expect(err.message).toBe('Forecast failed');
         }
      });
   });
});
