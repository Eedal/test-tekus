import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Country, CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countryUrl = environment.API_URL + 'countries';

  constructor(private http: HttpClient) {}

  getCountries(criteria = ''): Observable<Country[]> {
    let url = this.countryUrl;
    if (!!criteria) url = `${url}?criteria=${criteria}`;

    return this.http
      .get<CountryResponse>(url)
      .pipe(map((response) => response.Data));
  }
}
