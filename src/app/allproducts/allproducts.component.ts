import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-allporducts',
    templateUrl: './allproducts.component.html',
    styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}
