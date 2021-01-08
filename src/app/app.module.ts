import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {HeaderComponent} from '../app/layout/header/header.component';
import {FooterComponent} from '../app/layout/footer/footer.component';
import {AdminComponent} from '../app/admin/admin.component';
import {AdmintableComponent} from '../app/admintable/admintable.component';
import {AdminblogComponent} from './adminblog/adminblog.component';
import {AddproductsComponent} from './addproducts/addproducts.component';
import {UserprofileComponent} from '../app/userprofile/userprofile.component';
import {EditingredientsComponent} from './editingredients/editingredients.component';
import {SearchIngreByNameComponent} from './searchingredients/searchingredients.component';
import {SearchproductsByNameComponent} from './searchproducts/searchproducts.component';
import {SearchblogsComponent} from './searchblogs/searchblogs.component';
import {AdminbrandsComponent} from './adminbrands/adminbrands.component';
import {BlogdetailComponent} from './blogdetail/blogdetail.component';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import {ProductDialogComponent} from './addproducts/dialog-addproduct/dialog-addproduct.component'
import { MatTableModule } from '@angular/material/table'
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrandService } from './adminbrands/shared/adminbrands.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {AdminblogDialogComponent} from './adminblog/dialog-adminblog/dialog-adminblog.component'
import {CmtproductDialogComponent} from './productdetails/dialog_procmt/dialog_procmt.component'
import {CmtblogDialogComponent} from '../app/blogdetail/dialog_blogcmt/dialog_blogcmt.component'
import {EditingredientsDialogComponent} from './editingredients/dialog-editingre/dialog-editingre.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    AboutusComponent,
    AllproductsComponent,
    ProductDetailsComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    DeclareComponent,
    AdminComponent,
    AdmintableComponent,
    UserprofileComponent,
    AdminblogComponent,
    AddproductsComponent,
    EditingredientsComponent,
    SearchIngreByNameComponent,
    SearchproductsByNameComponent,
    SearchblogsComponent,
    AdminbrandsComponent,
    HeaderComponent,
    FooterComponent,
    ProductDialogComponent,
    AdminblogDialogComponent,
    EditingredientsDialogComponent,
    BlogdetailComponent,
    CmtproductDialogComponent,
    CmtblogDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatCardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BrandService,
    {
      provide: MatDialogRef,
      useValue: {}
    },],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
