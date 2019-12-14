import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { UserAccountService } from '../../services/userAccount.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  userName = new FormControl('');
  setPassword = new FormControl('');
  confirmPassword = new FormControl('');
  address = new FormControl('');
  state = new FormControl('');
  country = new FormControl('');
  zip = new FormControl('');

  constructor(private userAccountService: UserAccountService) { }

  onSubmit() {
    this.userAccountService.signup(this.firstName, this.lastName, this.userName, this.confirmPassword);
  }

  ngOnInit() {
  }

}
