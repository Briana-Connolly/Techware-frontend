import { Component, OnInit } from '@angular/core';
import {Product} from "../../entities/product.entity";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findKids();
  }

}
