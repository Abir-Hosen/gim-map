import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    console.log('login service')
    return this.http.post(`${base_url}ejogajog/api/v1/auth/adminLogIn`, data)
  }
}
