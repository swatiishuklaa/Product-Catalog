import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private url="http://localhost:8081/login";
  constructor(private http:HttpClient) { }

  loginUser(user:User):Observable<object>{

    console.log("from service : ",user);
    return this.http.post(`${this.url}`,user);

  }
}
