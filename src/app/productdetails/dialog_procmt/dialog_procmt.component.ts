import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CmtProductService} from '../product_cmt.service'
import {Productcmt} from '../product_cmt.model'
@Component({
    selector: 'app-dialog_procmt',
    templateUrl: './dialog_procmt.component.html',
    styleUrls: ['./dialog_procmt.component.css']
  })
  export class CmtproductDialogComponent implements OnInit {
    public Image: File
    public m_returnUrl: string;
    public today = new Date();
    url;
    public productcmt : Productcmt
    constructor(public dialogRef: MatDialogRef<CmtproductDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: CmtProductService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
        this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
            return false;
          }
        this.productcmt = new Productcmt()
        this.productcmt.IDCmtProduct="CmtPro"+Math.floor(Math.random()*10000).toString()
        this.productcmt.Timecmt = '12/12/2020'
        this.productcmt.DisabledCmtProduct=false
        this.productcmt.IDProduct='1234';
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.readAsDataURL(event.target.files[0]); // read file as data url
    
          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target.result;
          }
    
          // Saved Image into varible
          this.Image = event.target.files[0];
        }
      }
      onNoClick(): void {
        this.dialogRef.close();
      }
      async onSave(){
        try{
          const formData = new FormData();
          if (Image) {
           
            formData.append('idCmtProduct', this.productcmt.IDCmtProduct);
            formData.append('idProduct',this.productcmt.IDProduct)
            formData.append('description',this.productcmt.Description)
            formData.append('composerName',this.productcmt.ComposerName)
            formData.append('phone',this.productcmt.Phone)
            formData.append('email',this.productcmt.Email)
            formData.append('idCmtProduct',this.productcmt.IDCmtProduct)
            formData.append('timecmt',this.productcmt.Timecmt)
            formData.append('disabledCmtProduct',this.productcmt.DisabledCmtProduct.toString())
         
            this.service.createcmtpro(formData);
            alert("Create succesfully !")
            this.onNoClick()
            this.refresh()
          }
          else
          {
            alert("Create failure !")
          }
        }
        catch(e)
        {
          alert("Upload failure !")
        }
      }
      refresh(): void {
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/productdetails/:id';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}