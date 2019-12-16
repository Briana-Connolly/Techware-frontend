import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MensComponent } from './components/mens/mens.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductService } from './services/product.service';
import {UserAccountService} from "./services/userAccount.service";
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    MensComponent,
    CheckoutComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, UserAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
