import { Component, OnInit} from '@angular/core';
import {SearchIngreByNameService} from "../searchingredients/searchingredients.service"
import { UserLogin } from '../staticvariable';
import {IngredientDetails} from '../searchingredients/searchingredients.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-searchingredients',
    templateUrl: './searchingredients.component.html',
    styleUrls: ['./searchingredients.component.css']
})
export class SearchIngreByNameComponent implements OnInit {
  public ingres:any
  public ingrelist=new Array<IngredientDetails>()
  public ingre:IngredientDetails
  public m_returnUrl: string;
  public name:string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:SearchIngreByNameService) {}

    ngOnInit() {     
      this.check=UserLogin.LoginState
      this.m_router.routeReuseStrategy.shouldReuseRoute = () =>{
        return false;
      }
    }
    async getIngreListByName(){
      this.ingres = await this.service.getallIngreByName(this.name)
      console.log(this.ingres)
      this.ingrelist=new Array<IngredientDetails>()
      for(let i=0;i<this.ingres.length;i++)
      {
        let ingre = new IngredientDetails()
        ingre.IDIngre = this.ingres[i].idIngre
        ingre.NameIngre = this.ingres[i].nameIngre
        ingre.Uses = this.ingres[i].uses
        ingre.Function = this.ingres[i].function
        ingre.PointIngre = this.ingres[i].pointIngre
        this.ingrelist.push(ingre)
      }
      
    }
}
