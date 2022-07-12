import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss']
})
export class SearchComponent {
   @Output() searchQuery = new EventEmitter<string>();

   public search = new FormControl('', [Validators.required]);
   public floatLabelControl = new FormControl('auto' as FloatLabelType);

   getFloatLabelValue(): FloatLabelType {
      return this.floatLabelControl.value || 'auto';
   }

   searchSubmitHandler(event: SubmitEvent) {
      event.preventDefault();

      this.searchQuery.emit(this.search.value as string);
   }
}
