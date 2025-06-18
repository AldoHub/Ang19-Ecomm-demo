import { Component, computed, inject } from '@angular/core';
import { Cart } from '../../../services/cart';


@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css'
})
export class OrderSummary {

  public cartService: Cart = inject(Cart);

  //whenever the cart changes, update the total
  public total = computed(() => {
    let total = 0;
    for (let item of this.cartService.cart()) {
      total += item.price;
    }
    return total;

  });
}
