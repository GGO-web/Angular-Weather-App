import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { mockedWeatherData } from 'src/constants';

import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
   let component: WeatherCardComponent;
   let fixture: ComponentFixture<WeatherCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [WeatherCardComponent],
         imports: [HttpClientModule]
      }).compileComponents();

      fixture = TestBed.createComponent(WeatherCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should display Weather response to the template', () => {
      spyOn(component.weatherService, 'getTodayWeather').and.returnValue(
         of(mockedWeatherData)
      );

      component.makeSearchRequest('Lviv');

      expect(component.weatherData.name).toBe('Lviv');
   });

   it('should display error when request is failed', () => {
      spyOn(component.weatherService, 'getTodayWeather').and.returnValue(
         throwError(() => new Error('city is not found'))
      );
      component.makeSearchRequest('Lviv');

      expect(component.weatherService.weatherStatus.error).toBe(
         'city is not found'
      );
   });
});
