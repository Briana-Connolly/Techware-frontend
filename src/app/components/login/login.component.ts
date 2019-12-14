import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { UserAccountService } from '../../services/userAccount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userName = new FormControl('');
    password = new FormControl('');

  constructor(private userAccountService: UserAccountService) {
  }

  onSubmit() {
    console.log(this.userName.value);
    console.log(this.password.value);
    this.userAccountService.login(this.userName, this.password);
    this.userAccountService.getAccount();
  }

  ngOnInit() {
  }
}
