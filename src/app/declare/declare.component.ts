import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}
@Component({
    selector: 'app-declare',
    templateUrl: './declare.component.html',
    styleUrls: ['./declare.component.css']
})
export class DeclareComponent implements OnInit {
  step = 0;
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Trả Vải', sound: 'Woof!'},
    {name: 'Trà Sữa', sound: 'Meow!'},
    {name: 'Trà Đào', sound: 'Moo!'},
    {name: 'Trà Ô Long', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  typesOfShoes: string[] = ['Trà Vải Size M', 'Trà Vải Size L', 'Trà Vải Size XL', 'Trà Vải Size XXL', 'KOI Thé'];
    constructor(private router: Router ) {}

    ngOnInit() {
    }
    getPath(){
      return this.router.url;
    }
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
}
