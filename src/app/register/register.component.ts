import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from '../login/login.service'
import {User} from '../login/login.model'
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   public Users:User
   public m_returnUrl: string;
    constructor( private m_route: ActivatedRoute, private m_router: Router,private service:LoginService  ) {}

    ngOnInit() {
      this.Users = new User()
      this.Users.Male=true
      this.Users.Authen=true
    }
    async register(){
      if(this.Users.UserName!=null&&this.Users.Pass!=null&&this.Users.FirstName!=null&&this.Users.LastName!=null)
      {
        this.Users.IDUser = "User"+Math.floor(Math.random()*10000).toString()+"@Hola"
        this.Users.IDPoint = "0"
        const user = await this.service.createUser(this.Users)
        if(user)
        {
        alert("Register thành công rồi má")
        this.refresh()
        }
      }     
      if(this.Users.UserName==null||this.Users.Pass==null||this.Users.FirstName==null||this.Users.LastName==null)
        alert("Vui long nhap day du thong tin")    
    }
    refresh(): void {
      this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/login';
      this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
      //window.location.reload();
    }
}