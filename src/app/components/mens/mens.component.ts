import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  private products: Product[];

  isModal1Active: boolean = false;
  isModal2Active: boolean = false;
  isModal3Active: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll();
    console.log(this.products);
  }


}
