import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from '../login/login.service'
import {User} from '../login/login.model'
import {UserLogin} from '../staticvariable'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public Users:User
    public authen:boolean
    public m_returnUrl: string;
    constructor(private m_route: ActivatedRoute, private m_router: Router,private service:LoginService ) {}

    ngOnInit() {
        this.Users = new User()
    }
    async login(){
        const loginn = await this.service.loginUser(this.Users)
        if(loginn)
        {
            this.authen = loginn["authen"]
            UserLogin.Id = loginn["idUser"]
            UserLogin.Name = loginn["firstName"]+" "+loginn["lastName"]
            UserLogin.LoginState = true
            alert("Login successfully")
        }
        if(UserLogin.LoginState==true)
        {
            if(this.authen==true)
                this.routingAdmin()
            else
                this.routingUser()
        }
    }
    routingAdmin(): void {
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/admin';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        //window.location.reload();
    }
    routingUser(): void {
        this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/home';
        this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
        //window.location.reload();
    }
}