import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fullName = new FormControl('');
  address = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zip = new FormControl('');
  ccName = new FormControl('');
  ccNum = new FormControl('');
  expMon = new FormControl('');
  expYear = new FormControl('');
  cvv = new FormControl('');

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

}
