import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {BlogsComponent} from '../app/blogs/blogs.component';
import {AboutusComponent} from '../app/aboutus/aboutus.component';
import {AllproductsComponent} from '../app/allproducts/allproducts.component';
import {ProductDetailsComponent} from '../app/productdetails/productdetails.component';
import {ContactusComponent} from '../app/contactus/contactus.component';
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/register/register.component';
import {WishlistComponent} from '../app/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'blogs',             component: BlogsComponent },
  { path: 'aboutus',             component: AboutusComponent },
  { path: 'allproducts',             component: AllproductsComponent },
  { path: 'productdetails',             component: ProductDetailsComponent },
  { path: 'contactus',             component: ContactusComponent },
  { path: 'login',             component: LoginComponent },
  { path: 'register',             component: RegisterComponent },
  { path: 'wishlist',             component: WishlistComponent },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
