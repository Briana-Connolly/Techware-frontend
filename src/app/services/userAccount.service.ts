import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user.entity';
import {FormControl} from "@angular/forms";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  loginUrl = 'http://techware.eastus.azurecontainer.io:8443/api/v1/login';
  signupUrl = 'http://techware.eastus.azurecontainer.io:8443/api/v1/signup';
  getAccUrl = 'http://techware.eastus.azurecontainer.io:8443/api/v1/myaccount?useraccountId=1';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    console.log(username + '' + password);
    // const headers = new HttpHeaders().append('Content-Type', 'application/json')
    const params: string = [
      `username=${username}`,
      `password=${password}`
    ].join('&');
    const url = `${this.loginUrl}?${params}`;
    return this.http.post(url, JSON.stringify(''))
      .subscribe((data) => {
        console.log(data);
      });
  }

  signup(email: string, firstName: string, lastName: string, username: string, password: string, dateOfBirth: string, phoneNumber: string){
    return this.http.post(this.signupUrl, JSON.stringify({ email: email,
      firstName: firstName, lastName: lastName, username: username, password: password, dateOfBirth: dateOfBirth, phoneNumber: phoneNumber,
    })).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  getAccount(){
    this.http.get(this.getAccUrl).subscribe(users => {
      return users;
    });

  }
}
