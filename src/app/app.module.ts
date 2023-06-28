import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {DataService} from "./services/data.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PhotoShadowHoverComponent } from './components/photo-shadow-hover/photo-shadow-hover.component';
import { PhonesComponent } from './components/phones/phones.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { ItemComponent } from './components/item/item.component';
import { NotebooksComponent } from './components/notebooks/notebooks.component';
import { CardComponent } from './components/card/card.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import {SummaryPipe} from "./pipes/summary.pipe";
import {FilterTextPipe} from "./pipes/filter-text.pipe";
import {TextFormatDirective} from "./directives/text-format.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    PhotoShadowHoverComponent,
    PhonesComponent,
    AllItemsComponent,
    ItemComponent,
    NotebooksComponent,
    CardComponent,
    AccessoriesComponent,
    TabletsComponent,
    ItemDetailComponent,
    AdminHomeComponent,
    AddProductComponent,
    SummaryPipe,
    FilterTextPipe,
    TextFormatDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [DataService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
