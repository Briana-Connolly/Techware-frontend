import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  email = new FormControl('');
  dateOfBirth = new FormControl('');
  phoneNumber= new FormControl('');

  constructor(private userAccountService: UserAccountService, private route: ActivatedRoute,
              private router: Router) { }

  onSubmit() {
   this.userAccountService.signup(this.email.value, this.firstName.value, this.lastName.value, this.userName.value, this.confirmPassword.value, this.dateOfBirth.value, this.phoneNumber.value);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
