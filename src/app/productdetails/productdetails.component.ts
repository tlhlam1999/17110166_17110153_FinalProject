import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductdetailsService} from "../productdetails/productdetails.service"
import {Dataset} from "../admin/dataset"
import { UserLogin } from '../staticvariable';
import { MatDialog } from '@angular/material/dialog';
import {CmtproductDialogComponent} from './dialog_procmt/dialog_procmt.component'
import {Productcmt} from 'src/app/productdetails/product_cmt.model'
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
  public NameProductType:string=''  
  public DescriptionPro:string=''    
  public ImagePro:string='' 
  public PointPro: Float32Array
  public Linktobuy:string=''    
  public pcmt : Productcmt
  public cmts:any
  public cmtList = new Array<Productcmt>();
    constructor(private router: Router,private service:ProductdetailsService,public dialog: MatDialog ) {}

    ngOnInit() {
      this.getPath()
      this.getCommnet()
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(CmtproductDialogComponent, {
        width: '500px',
        height: '400px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.cmtList = new Array<Productcmt>();
        this.getCommnet()
      });
    }
    async getPath(){
      const product = await this.service.getProduct(UserLogin.ID3tempt)
      this.Id3Code = product["iD3code"]
      this.IdBrandPro = product["idBrand"]
      this.IdSkinPro = product["idSkintype"]
      this.NameProduct = product["nameProduct"]  
      this.NameProductType = product["nameProductType"]  
      this.DescriptionPro = product["description"]
      this.ImagePro = product["image"]
      this.PointPro = product["pointProduct"]
      this.Linktobuy = product["linktobuy"]
      
    }
    async getCommnet(){
      this.cmts = await this.service.getCommentProduct(UserLogin.ID3tempt)
      console.log(this.cmts)
      for (let i = 0; i < this.cmts.length; i++) {
        let cmt = new Productcmt()
        cmt.ComposerName = this.cmts[i].composerName
        cmt.Description = this.cmts[i].description
        cmt.Email = this.cmts[i].email
        this.cmtList.push(cmt)
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
    
}