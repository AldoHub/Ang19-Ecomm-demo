import { Component, inject, input, InputSignal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';

import { Product } from '../../models/product.model';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  public CartService: Cart = inject(Cart);

  public product: InputSignal<Product> = input.required<Product>();

  public addToCart(product: Product){
    this.CartService.addToCart(product);
  }

}
