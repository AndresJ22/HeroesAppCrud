import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.apiRest;
  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuario/1`);
  }

}
