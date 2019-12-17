import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-mens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findWomens();
  }
}
