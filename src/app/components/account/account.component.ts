import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../services/userAccount.service';
import {User} from "../../entities/user.entity";
import {Observable, Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userName = new FormControl('');
  itemName = new FormControl('');
  itemPrice = new FormControl('');
  itemSize = new FormControl('');

  user;

  constructor(private userService: UserAccountService) {
  }

  ngOnInit() {
    console.log("WE DOING THIS");
    this.user = this.userService.getAccount();
    console.log(this.user);
  }

}
