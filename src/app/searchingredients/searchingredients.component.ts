import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-searchingredients',
    templateUrl: './searchingredients.component.html',
    styleUrls: ['./searchingredients.component.css']
})


export class SearchingredientsComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}