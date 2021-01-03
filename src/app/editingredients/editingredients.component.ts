import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {EditingredientsDialogComponent} from './dialog-editingre/dialog-editingre.component'
import {EditingredientsService} from './editingredients.service'
@Component({
    selector: 'app-editingredients',
    templateUrl: './editingredients.component.html',
    styleUrls: ['./editingredients.component.css']
})
export class EditingredientsComponent implements OnInit {

    constructor(private router: Router,private service:EditingredientsService,public dialog: MatDialog  ) {}

    ngOnInit() {
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(EditingredientsDialogComponent, {
        width: '500px',
        height: '400px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
    
}
