import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
@Component({
    selector: 'app-adminblog',
    templateUrl: './adminblog.component.html',
    styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {

 
    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}