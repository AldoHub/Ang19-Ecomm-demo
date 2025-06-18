import { Component, inject, input, InputSignal } from '@angular/core';
import { Cart } from '../../services/cart';
import { CartProduct } from '../../models/cartItem.model';
import { PrimaryButton } from '../primary-button/primary-button';

@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButton],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CartItem {

  public cartService: Cart = inject(Cart);
  
  public product: InputSignal<CartProduct> = input.required<CartProduct>();

  public removeFromCart(productId: number){
    this.cartService.removeFromCart(productId);
  }
}
