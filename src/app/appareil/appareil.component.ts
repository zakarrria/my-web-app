import { Component, Input, OnInit,} from '@angular/core';
import { appareilservice } from '../service/appareil.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilname: any;
  @Input() appareilstatus: any;
  @Input() indexofappareil: any;
  constructor(private appareilservice: appareilservice) { }
  ngOnInit(){
    //this.switchonone=this.onswitchon;
  }
  getstatus(){
  return this.appareilstatus
}
onswitchon(){
  this.appareilservice.switchonone(this.indexofappareil)
}
onswitchoff(){
  this.appareilservice.switchoffone(this.indexofappareil)
}

}
