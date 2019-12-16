import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../services/userAccount.service';
import {User} from "../../entities/user.entity";
import {Observable} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private user:  any = [];

  constructor(private userService: UserAccountService) {
  }

  ngOnInit() {
    console.log("WE DOING THIS");
    this.user = this.userService.getAccount();
    console.log(this.user);
  }

}
