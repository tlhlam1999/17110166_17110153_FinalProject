import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BlogdetailService} from './blogdetail.service'
import {Blogs} from '../blogs/blogs.model'
import { MatDialog } from '@angular/material/dialog';
import { UserLogin } from '../staticvariable';
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
    
  
    constructor(private router: Router,private service:BlogdetailService ) {}

    ngOnInit() {
      this.getPath()
    }
    async getPath(){
      const product = await this.service.getProduct(UserLogin.ID3tempt)
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
