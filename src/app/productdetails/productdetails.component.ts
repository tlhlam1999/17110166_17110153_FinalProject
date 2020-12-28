import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductdetailsService} from "../productdetails/productdetails.service"
import {Dataset} from "../admin/dataset"
import { UserLogin } from '../staticvariable';
@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public Id3Code:string=''    
  public IdBrandPro:string=''    
  public IdSkinPro:string=''    
  public NameProduct:string=''  
  public DescriptionPro:string=''    
  public ImagePro:string='' 
  public PointPro: Float32Array
  
    constructor(private router: Router,private service:ProductdetailsService ) {}

    ngOnInit() {
      this.getPath()
    }
    async getPath(){
      const product = await this.service.getProduct(UserLogin.ID3tempt)
      console.log(product)
      this.Id3Code = product["iD3code"]
      this.IdBrandPro = product["idBrand"]
      this.IdSkinPro = product["idSkintype"]
      this.NameProduct = product["nameProduct"]  
      this.DescriptionPro = product["description"]
      this.ImagePro = product["image"]
      this.PointPro = product["pointProduct"]
      
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
}