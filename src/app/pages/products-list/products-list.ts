import { Component, signal, Signal, OnInit, WritableSignal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {
  
  
  constructor() { }
  //set a products list using signals
  public prodcutList: WritableSignal<Product[]> = signal<Product[]>([]);
  
  public async fetchProducts(){
    console.log("fetching products")
    let response = fetch('https://fakestoreapi.com/products');
    response.then(response => response.json()).then(data => {
      this.prodcutList.set(data);
    });

  }


  async ngOnInit(): Promise<void> {
   await this.fetchProducts();
  }

  
}
