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
import {DeclareComponent} from '../app/declare/declare.component';
import {AdminComponent} from '../app/admin/admin.component';
import {AdmintableComponent} from '../app/admintable/admintable.component';
import {AdminblogComponent} from './adminblog/adminblog.component';
import {UserprofileComponent} from '../app/userprofile/userprofile.component';
import {AddproductsComponent} from './addproducts/addproducts.component';
import {EditingredientsComponent} from './editingredients/editingredients.component';
import {SearchIngreByNameComponent} from './searchingredients/searchingredients.component';
import {SearchproductsByNameComponent} from './searchproducts/searchproducts.component';
import {SearchblogsComponent} from './searchblogs/searchblogs.component';
import {AdminbrandsComponent} from './adminbrands/adminbrands.component';
import {BlogdetailComponent} from './blogdetail/blogdetail.component';
const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'blogs',             component: BlogsComponent },
  { path: 'aboutus',             component: AboutusComponent },
  { path: 'allproducts',             component: AllproductsComponent },
  { path: 'productdetails/:id',             component: ProductDetailsComponent },
  { path: 'contactus',             component: ContactusComponent },
  { path: 'login',             component: LoginComponent },
  { path: 'register',             component: RegisterComponent },
  { path: 'wishlist',             component: WishlistComponent },
  { path: 'declare',             component: DeclareComponent },
  { path: 'admin',             component: AdminComponent },
  { path: 'admintable',             component: AdmintableComponent },
  { path: 'userprofile',             component: UserprofileComponent },
  { path: 'adminblog',             component: AdminblogComponent },
  { path: 'addproducts',             component: AddproductsComponent },
  { path: 'editingredients',             component: EditingredientsComponent },
  { path: 'searchingredients',             component: SearchIngreByNameComponent },
  { path: 'searchproducts',             component: SearchproductsByNameComponent },
  { path: 'searchblogs',             component: SearchblogsComponent },
  { path: 'adminbrands',             component: AdminbrandsComponent },
  { path: 'blogdetail/:id',             component: BlogdetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
