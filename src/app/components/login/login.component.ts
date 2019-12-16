import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserAccountService } from '../../services/userAccount.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName = new FormControl('');
    password = new FormControl('');

  constructor(private userAccountService: UserAccountService, private route: ActivatedRoute,
              private router: Router) {
  }

  onSubmit() {
    console.log(this.userName.value);
    console.log(this.password.value);
    this.userAccountService.login(this.userName.value, this.password.value);
    // this.userAccountService.getAccount();

    this.router.navigate(['/account']);
  }

  ngOnInit() {
  }

}
