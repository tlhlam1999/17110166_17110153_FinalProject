import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}
