import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
   let component: SearchComponent;
   let fixture: ComponentFixture<SearchComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [SearchComponent],
         imports: [HttpClientModule]
      }).compileComponents();

      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should submit form when input value is setted', () => {
      spyOn(component.searchQuery, 'emit');

      component.search.setValue('City Name');
      fixture.detectChanges();

      const form = fixture.debugElement.query(By.css('.search-form__button'));
      form.nativeElement.dispatchEvent(new Event('submit'));

      fixture.detectChanges();

      expect(component.searchQuery.emit).toHaveBeenCalledWith('City Name');
   });
});
