import { Component, Input, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { interval, Observable, observable } from 'rxjs';
import { appareilservice } from './service/appareil.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  @Input() appareilname: any;
  @Input() appareilstatus: any;
  @Input() indexofappareil: any;
  secondes!: number;
  constructor(){}
  ngOnInit() {
    const counter= interval(1000);
    counter.subscribe(
      (value:number)=>{
        this.secondes=value;
      },
      (error:any)=>{
        console.log('une erreur est survenue')
      },
      ()=>{
        console.log('observable est terminée')
      }
      )
  }
}
  
    
 /* next:(value:number)=>{
  this.secondes=value;
},
Error(Error)=>{
console.log ('une erreur est rencontré');
},
complete: ()=>{
console.log ('fin');*/
      


