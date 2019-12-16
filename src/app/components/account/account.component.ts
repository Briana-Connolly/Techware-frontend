import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../services/userAccount.service';
import {User} from "../../entities/user.entity";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user;

  constructor(private userService: UserAccountService) {
  }

  ngOnInit() {
      this.user = this.userService.getAccount();
  }

}
