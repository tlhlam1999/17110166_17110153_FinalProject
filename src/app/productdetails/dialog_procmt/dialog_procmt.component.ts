import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProductdetailsService} from "../../productdetails/productdetails.service"
import {Productcmt} from '../product_cmt.model'
import { UserLogin } from 'src/app/staticvariable';
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
    public pcmt : Productcmt
    constructor(public dialogRef: MatDialogRef<CmtproductDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: ProductdetailsService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
      this.pcmt = new Productcmt()  
      this.pcmt.IDCmtProduct="CmtPro"+Math.floor(Math.random()*10000).toString()
      this.pcmt.DisabledCmtProduct='false'
      this.pcmt.IDProduct=UserLogin.ID3tempt
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
      async onSave() {
        try {
          const formData = new FormData();
          formData.append('idCmtProduct', this.pcmt.IDCmtProduct);
          formData.append('idProduct', this.pcmt.IDProduct);
          formData.append('description', this.pcmt.Description);
          formData.append('email', this.pcmt.Email);
          formData.append('composerName', this.pcmt.ComposerName);
          formData.append('phone', this.pcmt.Phone);
          const result = await this.service.createComment(formData);
          alert('Add sucessfully');    
          this.dialogRef.close();
        }
        catch (e) {
          alert('Add failed');
        }
      };
      refresh(): void {
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/productdetails/:id';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}