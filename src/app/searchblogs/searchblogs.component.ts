import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-searchblogs',
  templateUrl: './searchblogs.component.html',
  styleUrls: ['./searchblogs.component.css']
})

export class SearchblogsComponent implements OnInit {

  
    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}