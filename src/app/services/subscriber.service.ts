import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  subscribersUrl = environment.API_URL + 'subscribers/'

  constructor(private http: HttpClient) { }

  getSubscribers(): Observable<any> {
    return this.http.get(this.subscribersUrl);
  }
}
