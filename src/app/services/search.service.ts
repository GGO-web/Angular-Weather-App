import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockedSearchCities } from 'src/constants';
import { environment } from 'src/environments/environment';
import { ISearchCities, ISearchStatus } from '../models/search.model';

@Injectable({
   providedIn: 'root'
})
export class SearchService {
   public searchStatus: ISearchStatus = {
      loading: false,
      error: '',
      completed: false
   };

   constructor(public http: HttpClient) {}

   searchByCityName(location: string) {
      // return of(mockedSearchCities);

      const [url, host] = [
         'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
         {
            name: 'X-RapidAPI-Host',
            value: 'wft-geo-db.p.rapidapi.com'
         }
      ];

      return this.http.get<ISearchCities>(url, {
         headers: new HttpHeaders()
            .set(host.name, host.value)
            .set(environment.XRapidAPIKey.name, environment.XRapidAPIKey.value),
         params: new HttpParams().set('namePrefix', location)
      });
   }
}
