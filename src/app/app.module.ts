import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';


import { ConfigService } from "./services/config.service";
import { LoginComponent } from './public/account/login/login.component';
import { RegisterComponent } from './public/account/register/register.component';
import { AccountComponent } from './public/account/account/account.component';
import { WishlistComponent } from './public/account/wishlist/wishlist.component';
import { ForgotPasswordComponent } from './public/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './public/account/reset-password/reset-password.component';
import { ResetAccountComponent } from './public/account/reset-account/reset-account.component';
import { MyOrdersComponent } from './public/account/my-orders/my-orders.component';
import { MyOrderDetailComponent } from './public/account/my-order-detail/my-order-detail.component';
import { CategoriesComponent } from './public/product/categories/categories.component';
import { ProductsComponent } from './public/product/products/products.component';
import { ProductDetailComponent } from './public/product/product-detail/product-detail.component';
import { CategoryDetailComponent } from './public/product/category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    WishlistComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetAccountComponent,
    MyOrdersComponent,
    MyOrderDetailComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoryDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
