import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from '../app/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }