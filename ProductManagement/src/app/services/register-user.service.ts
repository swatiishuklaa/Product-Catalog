import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<object>{
   return this.http.post("http://localhost:8081/signup",user);
  }
}
