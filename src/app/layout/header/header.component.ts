import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserLogin} from '../../staticvariable'
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    check:boolean
    name:string
    public m_returnUrl: string;
    constructor(private m_route: ActivatedRoute, private m_router: Router ) {}

    ngOnInit() {
      this.check=UserLogin.LoginState
      this.name=UserLogin.Name
    }
    logout()
    {
      UserLogin.LoginState=false
      this.routing()

    }
    routing(): void {
      this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/login';
      this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
      //window.location.reload();
    }
}