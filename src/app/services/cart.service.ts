import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
staticPurchaseItem:any = {
food:[
  { id: 0, name: 'Margherita', price: 50, amount: 1 },
  { id: 1, name: 'Marinara', price: 30, amount: 1 },
  { id: 2, name: 'Quattro Stagioni', price: 50, amount: 1 },
  { id: 3, name: 'Carbonara', price: 30, amount: 1 },
  { id: 4, name: 'Tonno', price: 20, amount: 1 },
  { id: 5, name: 'Emiliana', price: 100, amount: 1 },
  { id: 6, name: 'Prosciutto', price: 50, amount: 1 },
  { id: 7, name: 'Gorgonzola', price: 40, amount: 1 },
  { id: 8, name: 'Diavola', price: 30, amount: 1 },
  { id: 9, name: 'Ricotta', price: 50, amount: 1 }
],
electronic:[
  { id: 10, name: 'Phone', price: 50, amount: 1 },
  { id: 21, name: 'Monitor', price: 30, amount: 1 },
  { id: 32, name: 'Keyboard', price: 50, amount: 1 },
  { id: 43, name: 'RAM 8GB', price: 30, amount: 1 },
  { id: 54, name: 'SSD 500GB', price: 20, amount: 1 },
  { id: 65, name: 'Laptop', price: 100, amount: 1 },
  { id: 76, name: 'HeadPhone', price: 50, amount: 1 },
  { id: 87, name: 'Adapter', price: 40, amount: 1 },
  { id: 98, name: 'Speaker', price: 30, amount: 1 },
  { id: 79, name: 'Pendrive', price: 50, amount: 1 } 
],
furniture:[
  { id: 210, name: 'Chair', price: 50, amount: 1 },
  { id: 121, name: 'Slide Boards', price: 30, amount: 1 },
  { id: 232, name: 'Sofa', price: 50, amount: 1 },
  { id: 343, name: 'Cafe chair', price: 30, amount: 1 },
  { id: 454, name: 'Bar Stool', price: 20, amount: 1 },
  { id: 565, name: 'Console Table', price: 100, amount: 1 },
  { id: 676, name: 'Bench Base', price: 50, amount: 1 },
  { id: 897, name: 'Shelf', price: 40, amount: 1 },
  { id: 868, name: 'Coffe Table', price: 30, amount: 1 },
  { id: 954, name: 'Writing Table', price: 50, amount: 1 } 
]
}

  data: Product[] = [];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts(type) {
    this.data = this.staticPurchaseItem[type];
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.getCartItemCount();
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart.length = 0;
  }
}
