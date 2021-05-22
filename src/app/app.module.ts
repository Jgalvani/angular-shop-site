import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { SingleProductComponent } from './pages/products/single-product/single-product.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartValidationComponent } from './pages/cart/cart-validation/cart-validation.component';
import { CartPaymentComponent } from './pages/cart/cart-payment/cart-payment.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ShareLinksComponent } from './components/share-links/share-links.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// Icons
import { ZoomIconComponent } from './icons/zoom-icon/zoom-icon.component';
import { EmptyStarComponent } from './icons/empty-star/empty-star.component';
import { FullStarComponent } from './icons/full-star/full-star.component';
import { HalfStarComponent } from './icons/half-star/half-star.component';
import { BagIconComponent } from './icons/bag-icon/bag-icon.component';
import { CartIconComponent } from './icons/cart-icon/cart-icon.component';
import { TrashIconComponent } from './icons/trash-icon/trash-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    ContactComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ProductViewComponent,
    ProductModalComponent,
    CartModalComponent,
    ZoomIconComponent,
    RatingStarsComponent,
    EmptyStarComponent,
    FullStarComponent,
    HalfStarComponent,
    BagIconComponent,
    CartIconComponent,
    ShareLinksComponent,
    PaginationComponent,
    TrashIconComponent,
    CartValidationComponent,
    CartPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
