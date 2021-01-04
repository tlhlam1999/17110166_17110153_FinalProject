import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditingredientsService} from '../editingredients.service'
import {IngredientDetails} from '../editingredients.model'
@Component({
    selector: 'app-dialog-editingre',
    templateUrl: './dialog-editingre.component.html',
    styleUrls: ['./dialog-editingre.component.css']
  })
  export class EditingredientsDialogComponent implements OnInit {
    public Image: File
    public m_returnUrl: string;
    url;
    public editingre : IngredientDetails
    constructor(public dialogRef: MatDialogRef<EditingredientsDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: EditingredientsService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
        this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
            return false;
          }
        this.editingre = new IngredientDetails()
        this.editingre.IDIngre="Ingre"+Math.floor(Math.random()*10000).toString()
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
            formData.append('idIngre', this.editingre.IDIngre);
            formData.append('nameIngre',this.editingre.NameIngre)
            formData.append('uses',this.editingre.Uses)
            formData.append('function',this.editingre.Function)
            formData.append('pointIngre',this.editingre.PointIngre.toString())
          
            this.service.createIngredients(formData);
            alert("Create succesfully !")
            this.onNoClick()
            this.refresh()         
        }
        catch(e)
        {
          alert("Upload failure !")
        }
      }
      refresh(): void {
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/editingredients';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}