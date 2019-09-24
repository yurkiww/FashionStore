import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserHttp } from 'src/interfaces/user-http.interface';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  // getUsers(): Observable<IUserHttp> {
  //   return this.http.get<IUserHttp>(this.API_URL);
  // }
  loginUser(email, password, remember): Observable<IUserHttp> {
    console.log(email, password, remember);
    console.log('Service works');
    return this.http.post<IUserHttp>(this.API_URL + '/login', {
      email,
      password,
    });
  }
  registerUser(
    firstName,
    lastName,
    email,
    password,
    city,
    state,
    zip,
    role
  ): Observable<any> {
    console.log(firstName, lastName, email, password);
    return this.http.post<IUser>(this.API_URL + '/users', {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
      zip,
      role,
    });
  }
}
