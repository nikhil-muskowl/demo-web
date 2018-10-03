import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';

// account
import { AccountComponent } from './public/account/account/account.component';
import { ForgotPasswordComponent } from './public/account/forgot-password/forgot-password.component';
import { LoginComponent } from './public/account/login/login.component';
import { MyOrderDetailComponent } from './public/account/my-order-detail/my-order-detail.component';
import { MyOrdersComponent } from './public/account/my-orders/my-orders.component';
import { RegisterComponent } from './public/account/register/register.component';
import { ResetAccountComponent } from './public/account/reset-account/reset-account.component';
import { ResetPasswordComponent } from './public/account/reset-password/reset-password.component';
import { WishlistComponent } from './public/account/wishlist/wishlist.component';

// product
import { CategoriesComponent } from './public/product/categories/categories.component';
import { CategoryDetailComponent } from './public/product/category-detail/category-detail.component';
import { ProductsComponent } from './public/product/products/products.component';
import { ProductDetailComponent } from './public/product/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'my-account', component: AccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-order-detail/:id', component: MyOrderDetailComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-account', component: ResetAccountComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
