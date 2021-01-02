import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { Declare } from './declare.model';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DeclareService} from './declare.sevice'
@Component({
    selector: 'app-declare',
    templateUrl: './declare.component.html',
    styleUrls: ['./declare.component.css']
})
export class DeclareComponent implements OnInit {
  public Image: File
  public m_returnUrl: string;
  url;
  public declare : Declare
  constructor( @Inject(DOCUMENT) private doc,
    private service: DeclareService,private m_route: ActivatedRoute,private m_router: Router) {
  }
  async ngOnInit() {
      this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
          return false;
        }
      this.declare = new Declare()
      this.declare.IDPoint="Point"+Math.floor(Math.random()*10000).toString()
      this.declare.PTotal=0;
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
    async onSave(){
      try{
        
        const formData = new FormData();
        if (Image) {
          formData.append('image', this.Image);
          formData.append('iDSkinType',this.declare.IDSkinType)
          formData.append('iDPoint',this.declare.IDPoint)
          formData.append('pAcneType',this.declare.PAcneType.toString())
          formData.append('pPastUsing',this.declare.PPastUsing.toString())
          formData.append('pDailyHabit',this.declare.PDailyHabit.toString())
          formData.append('pMealHabit',this.declare.PMealHabit.toString())
          this.service.createDeclare(formData);
          alert("Create succesfully !")
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
      this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/declare';
      this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
      
      //window.location.reload();
    }
}
