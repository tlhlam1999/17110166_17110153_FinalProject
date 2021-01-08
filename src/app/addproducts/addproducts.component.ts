import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './product.service'
import {Product} from './product.model'
import { MatDialog } from '@angular/material/dialog';
import {ProductDialogComponent} from './dialog-addproduct/dialog-addproduct.component'
@Component({
    selector: 'app-addproducts',
    templateUrl: './addproducts.component.html',
    styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

    constructor(private router: Router,private service:ProductService,public dialog: MatDialog ) {}

    ngOnInit() {
    }
    
     openDialog(): void {
      const dialogRef = this.dialog.open(ProductDialogComponent, {
        width: '500px',
        height: '700px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
    
}