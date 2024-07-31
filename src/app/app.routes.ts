import { Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DesiredProductsComponent } from './components/desired-products/desired-products.component';

export const routes: Routes = [
    {path: 'products', component: AllProductsComponent},
    {path: 'deseados', component: DesiredProductsComponent},
];
