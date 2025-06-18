import { Component, inject } from '@angular/core';
import { CartItem } from '../../components/cart-item/cart-item';


import { Cart } from '../../services/cart';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  templateUrl: './cartPage.html',
  styleUrl: './cart.css'
})
export class CartPage {

  public cartService: Cart = inject(Cart);

}
