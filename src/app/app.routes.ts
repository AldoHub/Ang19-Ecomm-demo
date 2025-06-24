import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ProductsList
},{
    path: 'cart',
    loadComponent: () => import('./pages/cart/cartPage').then(m => m.CartPage)
}

];
