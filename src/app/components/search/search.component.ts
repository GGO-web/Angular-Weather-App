import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import {
   catchError,
   debounceTime,
   delay,
   filter,
   map,
   Observable,
   ReplaySubject,
   tap
} from 'rxjs';
import { City, ISearchCities } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';
import { WeatherService } from 'src/app/services/weather.service';
import { mockedSearchCities } from 'src/constants';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   @Output() searchQuery = new EventEmitter<string>();

   public search = new FormControl('');
   public searchBackend = new FormControl('');

   public floatLabelControl = new FormControl('auto' as FloatLabelType);

   public filteredCities: ReplaySubject<string[]> = new ReplaySubject<string[]>(
      1
   );

   constructor(
      public weatherService: WeatherService,
      public searchService: SearchService
   ) {}

   ngOnInit(): void {
      this.searchBackend.valueChanges
         .pipe(
            filter(search => !!search),
            tap(() => (this.searchService.searchStatus.loading = true)),
            debounceTime(1000),
            map(location => {
               this.searchService.searchStatus.error = '';
               this.searchService.searchStatus.completed = false;
               this.searchService.searchStatus.loading = true;

               return this.searchService.searchByCityName(location as string);
            }),
            delay(500)
         )
         .subscribe({
            next: (citiesResponseObservable: Observable<ISearchCities>) => {
               citiesResponseObservable.subscribe(citiesResponse => {
                  const citiesArr = citiesResponse.data;
                  const cities: string[] = [];

                  citiesArr.forEach((cityObj: City) => {
                     cities.push(cityObj.city);
                  });

                  this.searchService.searchStatus.loading = false;
                  this.searchService.searchStatus.completed = true;
                  this.filteredCities.next(cities);
               });
            }
         });
   }

   getFloatLabelValue(): FloatLabelType {
      return this.floatLabelControl.value || 'auto';
   }

   searchSubmitHandler(event: SubmitEvent) {
      event.preventDefault();

      this.searchQuery.emit(this.search.value as string);
      this.search.reset();
   }
}
