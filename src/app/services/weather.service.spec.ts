import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockedWeatherData } from 'src/constants';

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
});
