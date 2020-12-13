import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../allproducts/allproduct.service"
@Component({
    selector: 'app-allproducts',
    templateUrl: './allproducts.component.html',
    styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
    public id : string
    constructor(private router: Router ,private service:ProductService) {}

    ngOnInit() {
      this.getPath()
    }
    getPath(){
      const product = this.service.getProduct("123")
      this.id = product["iD3code"]
    }
}
