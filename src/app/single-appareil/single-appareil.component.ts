import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appareilservice } from '../service/appareil.service';
import { Authservice } from '../service/auth.service';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  constructor(private appareilservice:appareilservice, private router :ActivatedRoute) { }
 name: string='name';
  status: string='status';
  


  ngOnInit(){
    const id=this.router.snapshot.params['id'];
    //this.name= this.appareilservice.getappareilbyid(+id).name;
    //this.status= this.appareilservice.getappareilbyid(+id).status;
  }

}
