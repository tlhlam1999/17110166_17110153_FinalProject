import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AdminblogService} from '../adminblog.service'
import {Adminblog} from '../adminblog.model'
@Component({
    selector: 'app-dialog-adminblog',
    templateUrl: './dialog-adminblog.component.html',
    styleUrls: ['./dialog-adminblog.component.css']
  })
  export class AdminblogDialogComponent implements OnInit {
    public Image: File
    public m_returnUrl: string;
    url;
    public adminblog : Adminblog
    constructor(public dialogRef: MatDialogRef<AdminblogDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: AdminblogService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
        this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
            return false;
          }
        this.adminblog = new Adminblog()
        this.adminblog.IDBlog="BLOG"+Math.floor(Math.random()*10000).toString()
        this.adminblog.IDUser = "user1"
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
            formData.append('idBlog', this.adminblog.IDBlog);
            formData.append('idTopic',this.adminblog.IDTopic)
            formData.append('idUser',this.adminblog.IDUser)
            formData.append('idComposer',this.adminblog.IDComposer)
            formData.append('heading',this.adminblog.Heading)
            formData.append('description',this.adminblog.Description)
            formData.append('image',this.Image)
            formData.append('disabledBlog',this.adminblog.Disabled.toString())
            
            this.service.createBlog(formData);
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
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/adminblog';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}