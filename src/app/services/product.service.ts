import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[];
  private womensProducts: Product[];
  private kidsProducts: Product[];

  constructor() {
    this.products = [
      { id: '1', name: 'Mets Alonso Jersey', price: 20, size: 'Large', date: 'December 12th', photo: 'assets/img/mens/mens-alonso.png' },
      { id: '2', name: 'Brady Skeji Rangers Jersey', price: 30, size: 'X-Large', date: 'December 20th', photo: 'assets/img/mens/mens-Skjei.jpeg' },
      { id: '3', name: 'New York Giants T-Shirt', price: 10, size: 'Medium', date: 'December 28th', photo: 'assets/img/mens/mens-giants.jpg' }
    ];
    this.womensProducts = [
      { id: '4', name: 'Mets Cano Jersey', price: 20, size: 'Medium', date: 'December 15th', photo: 'assets/img/womens/womens-cano.png' },
      { id: '5', name: 'Rangers Lundovist Jersey', price: 30, size: 'Large', date: 'December 18th', photo: 'assets/img/womens/womens-lundovist.png' },
      { id: '6', name: 'NY Giants Barkley Jersey', price: 35, size: 'Small', date: 'December 22nd', photo: 'assets/img/womens/womens-barkley.png' }
    ];
    this.kidsProducts = [
      { id: '7', name: 'Mets McNeil Jersey', price: 25, size: 'Large', date: 'December 10th', photo: 'assets/img/kids/kids-mcneil.png' },
      {id: '8', name: 'Rangers Messier T-Shirt', price: 15, size: 'Medium', date: 'December 13th', photo: 'assets/img/kids/kids-messier.png' },
      {id: '9', name: 'NY Giants Cruz Jersey', price: 20, size: 'Large', date: 'December 26th', photo: 'assets/img/kids/kids-cruz.png' }
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  findWomens(): Product[]{
    return this.womensProducts;
  }

  findKids(): Product[]{
    return this.kidsProducts;
  }

  // find(id: string): Product {
  //   return this.products[this.getSelectedIndex(id)];
  // }
  //
  // private getSelectedIndex(id: string) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id == id) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }

}
