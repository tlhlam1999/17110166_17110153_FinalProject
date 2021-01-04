import { Component, OnInit} from '@angular/core';
import {SearchIngredientsService} from "../searchingredients/searchingredients.service"
import { UserLogin } from '../staticvariable';
import {IngredientDetails} from '../searchingredients/searchingredients.model'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-searchingredients',
  templateUrl: './searchingredients.component.html',
  styleUrls: ['./searchingredients.component.css'],
})
export class SearchingredientsComponent implements OnInit {

  public ingres:any
  public Ingrelist=new Array<IngredientDetails>()
  public ingre:IngredientDetails
  public m_returnUrl: string;
  check:boolean
    constructor(private m_route: ActivatedRoute, private m_router: Router ,private service:SearchIngredientsService) {}

    ngOnInit() {
      
      this.check=UserLogin.LoginState
      this.getIngreList()
    }
    async getIngreList(){
      this.ingres = await this.service.getallIngredient()
      console.log(this.ingres)
      for(let i=0;i<this.ingres.length;i++)
      {
        let ingre = new IngredientDetails()
        ingre.IDIngre = this.ingres[i].idIngre
        ingre.NameIngre = this.ingres[i].nameIngre
        ingre.Uses = this.ingres[i].uses
        ingre.Function = this.ingres[i].function
        ingre.PointIngre = this.ingres[i].pointIngre
        this.Ingrelist.push(ingre)
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
    this.m_returnUrl = this.m_route.snapshot.queryParams['returnUrl'] || '/productdetails/'+id;
    UserLogin.ID3tempt = id
    this.m_router.navigateByUrl(this.m_returnUrl, {skipLocationChange:true});
}
}

