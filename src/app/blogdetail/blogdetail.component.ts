import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BlogdetailService} from './blogdetail.service'
import {Blogs} from '../blogs/blogs.model'
import { MatDialog } from '@angular/material/dialog';
import { UserLogin } from '../staticvariable';
import {CmtblogDialogComponent} from './dialog_blogcmt/dialog_blogcmt.component'
import { Blogcmt } from './blog_cmt.model';
@Component({
    selector: 'app-blogdetail',
    templateUrl: './blogdetail.component.html',
    styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  public IdBlog:string=''    
  public IdTopic:string=''    
  public IdUser:string=''    
  public IDComposer:string=''  
  public Heading:string=''    
  public Description:string=''    
  public Image:string='' 
  public Disabled: boolean
  public pcmt : Blogcmt
  public cmts:any
  public cmtList = new Array<Blogcmt>();
  
    constructor(private router: Router,private service:BlogdetailService,public dialog: MatDialog ) {}

    ngOnInit() {
      this.getPath()
      this.getCommnet();
    }
    async getPath(){
      const product = await this.service.getBlog(UserLogin.ID3tempt)
      console.log(product)
      this.IdBlog = product["idBlog"]
      this.IdTopic = product["idTopic"]
      this.IdUser = product["idUser"]
      this.IDComposer = product["idComposer"]  
      this.Heading = product["heading"]
      this.Description = product["description"]
      this.Image = product["image"]
      this.Disabled = product["disabledBlog"] 
    }
    async getCommnet(){
      this.cmts = await this.service.getCommentBlog(UserLogin.ID3tempt)
      console.log(this.cmts)
      for (let i = 0; i < this.cmts.length; i++) {
        let cmt = new Blogcmt()
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
    openDialog(): void {
      const dialogRef = this.dialog.open(CmtblogDialogComponent, {
        width: '500px',
        height: '400px',
      });
    }
}
