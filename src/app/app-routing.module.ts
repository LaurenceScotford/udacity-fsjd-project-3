// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App imports
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginComponent } from './components/login/login.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'confirm-order/:id', component: ConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
