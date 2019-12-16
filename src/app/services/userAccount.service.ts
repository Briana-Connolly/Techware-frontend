import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user.entity';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  loginUrl = 'http://techware.eastus.azurecontainer.io:8443/api/v1/login';
  signupUrl = 'http://techware.eastus.azurecontainer.io:8443/api/v1/signup';
  getAccUrl = 'https://techware.eastus.azurecontainer.io:8443/api/v1/myaccount?useraccountId=1';

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

  // signup(firstname: FormControl, lastname: FormControl, username: FormControl, password: FormControl){
  //   return this.http.post(this.signupUrl, JSON.stringify({
  //     firstname, lastname, username, password
  //   })).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }
  //   );
  // }

  getAccount(){
      console.log(this.http.get(this.getAccUrl));
   }

}
