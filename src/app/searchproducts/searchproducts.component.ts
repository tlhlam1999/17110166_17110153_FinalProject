import { Component, OnInit} from '@angular/core';
import {AllProductByNameService} from "../searchproducts/searchproducts.service"
import { UserLogin } from '../staticvariable';
import {Product} from '../addproducts/product.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-searchproducts',
    templateUrl: './searchproducts.component.html',
    styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsByNameComponent implements OnInit {
  public products:any
  public productlist=new Array<Product>()
  public product:Product
  public m_returnUrl: string;
  public name:string;
  public point:string;
  public loaisp:string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:AllProductByNameService) {}

    ngOnInit() {     
      this.check=UserLogin.LoginState
      this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
        return false;
      }
    }
    async getProductListByName(){
      this.products = await this.service.getallProductByName(this.name)
      console.log(this.products)
      this.productlist=new Array<Product>()
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
    async getProductListByPoint(){
      this.products = await this.service.getallProductByPoint(this.point)
      console.log(this.products)
      this.productlist=new Array<Product>()
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
    async getProductListByLoaisp(){
      this.products = await this.service.getallProductByLoaisp(this.loaisp)
      console.log(this.products)
      this.productlist=new Array<Product>()
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
