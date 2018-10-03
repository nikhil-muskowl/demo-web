import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';

// services
import { ConfigService } from "./services/config.service";
import { BannerService } from "./services/banner/banner.service";

// components
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
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
import { BannersComponent } from './public/modules/banners/banners.component';

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
    BannersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SwiperModule,
    NgxSpinnerModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle',
          distance: 12
        },
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        overlap: 150
      }
    }),
    AppRoutingModule,
  ],
  providers: [
    ConfigService,
    BannerService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
