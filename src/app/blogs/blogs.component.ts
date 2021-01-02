import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BlogsService} from './blogs.service'
import {Blogs} from './blogs.model'
import { UserLogin } from '../staticvariable';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs:any
  public bloglist=new Array<Blogs>()
  public blog: Blogs
  public m_returnUrl: string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:BlogsService) {}

    ngOnInit() {
      
      this.check=UserLogin.LoginState
      this.getBlogList()
    }
    async getBlogList(){
      this.blogs = await this.service.getallBlog()
      console.log(this.blogs)
      for(let i=0;i<this.blogs.length;i++)
      {
        let blog = new Blogs()
        blog.IDBlog = this.blogs[i].iDBlog
        blog.IDTopic = this.blogs[i].iDTopic
        blog.IDUser = this.blogs[i].iDUser
        blog.IDComposer = this.blogs[i].iDComposer
        blog.Heading = this.blogs[i].heading
        blog.Description = this.blogs[i].description
        blog.Image = this.blogs[i].image
        this.bloglist.push(blog)
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
  public getNavigation( id) {
    this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/blogdetail/'+id;
    UserLogin.ID3tempt = id
    this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
}
}
