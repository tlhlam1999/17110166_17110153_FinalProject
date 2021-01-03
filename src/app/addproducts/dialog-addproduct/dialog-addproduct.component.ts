import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProductService} from '../product.service'
import {Product} from '../product.model'
@Component({
    selector: 'app-dialog-addproduct',
    templateUrl: './dialog-addproduct.component.html',
    styleUrls: ['./dialog-addproduct.component.css']
  })
  export class ProductDialogComponent implements OnInit {
    public Image: File
    public m_returnUrl: string;
    url;
    public product : Product
    constructor(public dialogRef: MatDialogRef<ProductDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: ProductService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
        this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
            return false;
          }
        this.product = new Product()
        this.product.ID3code="Pro"+Math.floor(Math.random()*10000).toString()
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
            formData.append('image', this.Image);
            formData.append('description',this.product.Description)
            formData.append('linktobuy',this.product.Linktobuy)
            formData.append('nameProduct',this.product.NameProduct)
            formData.append('nameProductType',this.product.NameProductType)
            formData.append('pointProduct',this.product.PointProduct.toString())
            formData.append('disabledPro',this.product.DisabledPro.toString())
            formData.append('iD3code',this.product.ID3code)
            formData.append('idBrand',this.product.IDBrand)
            formData.append('idSkintype',this.product.IDSkintype)
            formData.append('idProductType',this.product.IDProductType)
            this.service.createTrip(formData);
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
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/admin/addproduct';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}