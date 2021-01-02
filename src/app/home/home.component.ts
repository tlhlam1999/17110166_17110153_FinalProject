import { Component, OnInit} from '@angular/core';
import {AllProductService} from "../allproducts/allproduct.service"
import { UserLogin } from '../staticvariable';
import {Product} from '../addproducts/product.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products:any
  public productlist=new Array<Product>()
  public product:Product
  public m_returnUrl: string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:AllProductService) {}

    ngOnInit() {
      
      this.check=UserLogin.LoginState
      this.getProductList()
    }
    async getProductList(){
      this.products = await this.service.getallProduct()
      console.log(this.products)
      for(let i=0;i<this.products.length;i++)
      {
        let product = new Product()
        product.ID3code = this.products[i].iD3code
        product.IDBrand = this.products[i].idBrand
        product.IDSkintype = this.products[i].idSkintype
        product.IDProductType = this.products[i].idProductType
        product.NameProduct = this.products[i].nameProduct
        product.NameProductType = this.products[i].nameProductType
        product.Description = this.products[i].description
        product.Linktobuy = this.products[i].linktobuy
        product.Image = this.products[i].image
        product.PointProduct = this.products[i].pointProduct
        this.productlist.push(product)
      }
      
    }
  getImageMime(base64: string): string
  {
    var tempString=String(base64);
    if (tempString.charAt(0)=='/') return 'jpg';
    else if (tempString.charAt(0)=='R') return "gif";
    else if(tempString.charAt(0)=='i') return 'png';
    else if(tempString.charAt(0)=="A") return "mp4";
    else return 'jpeg';
  }
  getImageSource(base64: string): string
  {
    return `data:image/${this.getImageMime(base64)};base64,${base64}`; 
  }
  public getNavigation( id) {
    this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/productdetails/'+id;
    UserLogin.ID3tempt = id
    this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
}
}
