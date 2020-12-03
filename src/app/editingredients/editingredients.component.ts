import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-editingredients',
    templateUrl: './editingredients.component.html',
    styleUrls: ['./editingredients.component.css']
})
export class EditingredientsComponent implements OnInit {

    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
}
