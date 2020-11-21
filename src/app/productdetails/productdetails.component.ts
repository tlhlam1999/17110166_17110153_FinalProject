import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}