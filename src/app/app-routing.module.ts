import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import { CartComponent } from './pages/cart/cart/cart.component';
import { CartValidationComponent } from './pages/cart/cart-validation/cart-validation.component';
import { CartPaymentComponent } from './pages/cart/cart-payment/cart-payment.component';

import { ProductsComponent } from './pages/products/products/products.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },

  //Cart
  { path: 'cart', component: CartComponent },
  { path: 'cart/validation', component: CartValidationComponent },
  { path: 'cart/payment', component: CartPaymentComponent },

  //Products
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: SingleProductComponent },

  //Customer
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //Error
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
