import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { CartPage } from './pages/cart/cartPage';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ProductsList
},{
    path: 'cart',
    component: CartPage
}

];
