import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component"
import {MensComponent} from "./components/mens/mens.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {CartComponent} from "./components/cart/cart.component";
import {AccountComponent} from "./components/account/account.component";
import {WomensComponent} from "./components/womens/womens.component";
import {KidsComponent} from "./components/kids/kids.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'mens',
    component: MensComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },{
    path: 'cart',
    component: CartComponent
  }
  ,{
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'womens',
    component: WomensComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
