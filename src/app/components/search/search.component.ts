import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss']
})
export class SearchComponent {
   @Output() searchQuery = new EventEmitter<string>();

   public search = new FormControl('');
   public floatLabelControl = new FormControl('auto' as FloatLabelType);

   constructor(public weatherService: WeatherService) {}

   getFloatLabelValue(): FloatLabelType {
      return this.floatLabelControl.value || 'auto';
   }

   searchSubmitHandler(event: SubmitEvent) {
      event.preventDefault();

      this.searchQuery.emit(this.search.value as string);
      this.search.reset();
   }
}
