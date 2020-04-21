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

  data: Product[] = [
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
  ];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
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
