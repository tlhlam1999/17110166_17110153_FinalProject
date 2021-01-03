import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {AdminblogService} from './adminblog.service'
import {Adminblog} from './adminblog.model'
import { MatDialog } from '@angular/material/dialog';
import {AdminblogDialogComponent} from './dialog-adminblog/dialog-adminblog.component'
@Component({
    selector: 'app-adminblog',
    templateUrl: './adminblog.component.html',
    styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {

 
    constructor(private router: Router,private service:AdminblogService,public dialog: MatDialog ) {}

    ngOnInit() {
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(AdminblogDialogComponent, {
        width: '1000px',
        height: '700px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
}