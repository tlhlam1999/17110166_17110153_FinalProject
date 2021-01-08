import { Component, OnInit} from '@angular/core';
import {DeclareService} from "../declare/declare.sevice"
import { UserLogin } from '../staticvariable';
import {Declare} from '../declare/declare.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-declare',
    templateUrl: './declare.component.html',
    styleUrls: ['./declare.component.css']
})
export class DeclareComponent implements OnInit {
  public ingres:any
  public ingrelist=new Array<Declare>()
  public ingre:Declare
  public m_returnUrl: string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:DeclareService) {}

    ngOnInit() {
      
      this.check=UserLogin.LoginState
      this.getIngreList()
    }
    async getIngreList(){
      this.ingres = await this.service.getallIngre()
      console.log(this.ingres)
      for(let i=0;i<10;i++)
      {
        let ingre = new Declare()
        ingre.IDIngre = this.ingres[i].idIngre
        ingre.NameIngre = this.ingres[i].nameIngre
        ingre.Uses = this.ingres[i].uses
        ingre.Function = this.ingres[i].function
        ingre.PointIngre = this.ingres[i].pointIngre
        this.ingrelist.push(ingre)
      }
      
    }

  public getNavigation( id) {
    this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/productdetails/'+id;
    UserLogin.ID3tempt = id
    this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
}
}
