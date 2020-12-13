import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { BrandService } from './shared/adminbrands.service';
@Component({
    selector: 'app-adminbrands',
    templateUrl: './adminbrands.component.html',
    styleUrls: ['./adminbrands.component.css']
})
export class AdminbrandsComponent implements OnInit {

 
    constructor(private router: Router){}
    ngOnInit() {
    }
    getPath(){
        return this.router.url;
      }
    
}