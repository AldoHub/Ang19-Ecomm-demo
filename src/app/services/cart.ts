import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  constructor() { }

  cart: WritableSignal<Product[]> = signal<Product[]>([]);

  public addToCart(product: Product){
    console.log("service: " , product)
    this.cart.set([...this.cart(), product]);
  }

  public removeFromCart(productId: number){
    this.cart.set(this.cart().filter(item => item.id !== productId));
  }

}
