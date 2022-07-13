import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
   declarations: [AppComponent, SearchComponent, WeatherCardComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule,
      HttpClientModule,
      NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' })
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
