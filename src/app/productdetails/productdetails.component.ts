import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../allproducts/allproduct.service"
@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public id:string
    constructor(private router: Router,private service:ProductService ) {}

    ngOnInit() {
      this.getPath()
    }
    async getPath(){
      const product = await this.service.getProduct("123")
      console.log(product)
      this.id = product["iD3code"]
    }
}