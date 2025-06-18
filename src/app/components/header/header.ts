import { Component, inject, Signal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';


@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  cartService: Cart = inject(Cart);

  public title:Signal<string> = signal<string>('Angular E-commerce');
  public cart:Signal<string> = signal<string>('Cart');

  //consume the buttons output event
  public showButtonClicked(){
    console.log("CLICKED")
  }


}
