import { Component, signal, OnInit, WritableSignal, resource, Signal, computed, inject, ResourceRef } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';

import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {
    
  constructor() { }
  public httpClient = inject(HttpClient);
  
  //setting a signal param for the resources call
  public userId: Signal<string> = signal('1');
  //fetching data using resources
  public productsResource = resource<Product[], {id: string}>({
    params: () => ({id: this.userId() }),
    loader: ({params, abortSignal}) => this.fetchProductsWithResource(params, abortSignal),
  }); 
  

  public async fetchProductsWithResource(params:any, abortSignal: AbortSignal): Promise<Product[]>{
    console.log("params for resources ", params)
    const response = await fetch('https://fakestoreapi.com/products', {
      signal: abortSignal, //cancels previous request if a new one is fired
    });
    if(!response.ok){
     throw new Error("Unable to load products!");
    }

    let data = await response.json();
    return data;
  }

 
  //set a products list using signals
  public prodcutList: WritableSignal<Product[]> = signal<Product[]>([]);
  
  public async fetchProducts(){
    //console.log("fetching products")

    /*
    // fetching data using js fetch
    let response = fetch('https://fakestoreapi.com/products');
    response.then(response => response.json()).then(data => {
      console.log("fetching products with fetch");
      this.prodcutList.set(data);
    });
    */
  
  //fetching data using httpClient - works with interceptors
   this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
   .subscribe(data => {
      console.log("fetching products with httpClient");
      this.prodcutList.set(data);
    });


  }

  async ngOnInit(): Promise<void> {
   await this.fetchProducts();
  }

  
}
