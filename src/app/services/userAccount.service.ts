import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user.entity';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  loginUrl = 'https://techware.eastus.azurecontainer.io:8443/api/v1/login?username=johndoe@gmail.com&password=password1';
  signupUrl = 'https://techware.eastus.azurecontainer.io:8443/api/v1/signup';
  getAccUrl = 'https://techware.eastus.azurecontainer.io:8443/api/v1/myaccount?useraccountId=1';

  constructor(private http: HttpClient) {
  }

  login(username: FormControl, password: FormControl) {
    console.log(username + '' + password);
    //const headers = new HttpHeaders().append('Content-Type', 'application/json')

    return this.http.post(this.loginUrl, {'username': username, 'password': password}  )
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }

  signup(firstname: FormControl, lastname: FormControl, username: FormControl, password: FormControl){
      return this.http.post(this.signupUrl, {'firstname' : firstname, 'lastname' : lastname, 'username': username, 'password': password}) .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }

  getAccount(){
    return this.http.get(this.getAccUrl);
  }

}
