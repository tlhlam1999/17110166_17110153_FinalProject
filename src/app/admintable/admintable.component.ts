import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admintable',
    templateUrl: './admintable.component.html',
    styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}