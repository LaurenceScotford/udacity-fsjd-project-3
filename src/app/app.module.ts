// Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

// Import environment
import { environment } from '../environments/environment';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreDataService } from './services/store-data.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from './auth/auth.service';

// import dev only modules
let dev = environment.production ? [] : [
  HttpClientInMemoryWebApiModule.forRoot(StoreDataService, { dataEncapsulation: false })
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartProductComponent,
    ConfirmationComponent,
    LoginComponent,
    MessageComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    ...dev,
    AuthModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
