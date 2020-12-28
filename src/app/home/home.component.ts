import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from "../home/home.service"
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Id3Code:string=''    
  public IdBrandPro:string=''    
  public IdSkinPro:string=''    
  public NameProduct:string=''  
  public DescriptionPro:string=''    
  public ImagePro:string='' 
  public PointPro: Float32Array
    constructor(private router: Router, private service:HomeService  ) {}

    ngOnInit() {
      this.getPath()
    }
    async getPath(){
      const homeproduct = await this.service.getProduct("456")
      console.log(homeproduct)
      this.Id3Code = homeproduct["iD3code"]
      this.IdBrandPro = homeproduct["idBrand"]
      this.IdSkinPro = homeproduct["idSkintype"]
      this.NameProduct = homeproduct["nameProduct"]  
      this.DescriptionPro = homeproduct["description"]
      this.ImagePro = homeproduct["image"]
      this.PointPro = homeproduct["pointProduct"]
      
    }
}
