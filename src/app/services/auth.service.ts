import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Credential, LoginResponse } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  authUrl = environment.API_URL + 'account/';

  constructor(private http: HttpClient) {}

  login(credentials: Credential): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}login`, credentials);
  }

  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  isLoggedIn() {
    console.log("estamos", this.isAuthenticated)
    return this.isAuthenticated;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.setIsAuthenticated(false);
  }
}
