import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CmtBlogService} from '../blog_cmt.service'
import {Blogcmt} from '../blog_cmt.model'
@Component({
    selector: 'app-dialog_blogcmt',
    templateUrl: './dialog_blogcmt.component.html',
    styleUrls: ['./dialog_blogcmt.component.css']
  })
  export class CmtblogDialogComponent implements OnInit {
    public Image: File
    public m_returnUrl: string;
    public today = new Date();
    url;
    public blogcmt : Blogcmt
    constructor(public dialogRef: MatDialogRef<CmtblogDialogComponent>, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
      private service: CmtBlogService,private m_route: ActivatedRoute,private m_router: Router) {
    }
    async ngOnInit() {
        this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
            return false;
          }
        this.blogcmt = new Blogcmt()
        this.blogcmt.IDCmtBlog="CmtBlog"+Math.floor(Math.random()*10000).toString()
        this.blogcmt.IDBlog='1234';
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
           
            formData.append('idCmtBlog', this.blogcmt.IDCmtBlog);
            formData.append('idBlog',this.blogcmt.IDBlog)
            formData.append('description',this.blogcmt.Description)
            formData.append('composerName',this.blogcmt.ComposerName)
            formData.append('phone',this.blogcmt.Phone)
            formData.append('email',this.blogcmt.Email)
            formData.append('idCmtBlog',this.blogcmt.IDCmtBlog)
            formData.append('timecmt',this.blogcmt.Timecmt)
            formData.append('disabledCmtBlog',this.blogcmt.DisabledCmtBlog.toString())
         
            this.service.createcmtblog(formData);
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
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/blogdetail/:id';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        
        //window.location.reload();
      }
}