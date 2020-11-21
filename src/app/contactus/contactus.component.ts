import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  step = 0;

  
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
