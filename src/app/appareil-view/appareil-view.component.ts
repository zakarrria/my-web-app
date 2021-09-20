import { Component, OnInit,Input} from '@angular/core';
import { appareilservice } from '../service/appareil.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  @Input() appareilname: any;
  @Input() appareilstatus: any;
  @Input() indexofappareil: any;
 title = 'my-beauifull-app';
 isAuth=false;
 lastupdate =new Date; 
//appareilname:any;
//appareilstatus: any;
appareils:any;
constructor(private appareilservice:appareilservice) { }
ngOnInit(){
  this.appareils=this.appareilservice.appareils
}
getstatus(){
  return this.appareilstatus;
}
switchoff(){
  for (let appareil of this.appareils){
    appareil.status='éteint'
  }
}
switchon() {
  for (let appareil of this.appareils){
    appareil.status='allumé'}
}

}
