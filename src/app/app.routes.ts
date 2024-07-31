import { Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DesiredProductsComponent } from './components/desired-products/desired-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

export const routes: Routes = [
    {path: 'products', component: AllProductsComponent},
    {path: 'deseados', component: DesiredProductsComponent},
    {path: 'detail-product/:idProduct', component: DetailProductComponent},
    {path: '**', redirectTo: 'products'}
];
