import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authservice } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private authservice:Authservice,private router:Router) { }
  authstatus:any;
  ngOnInit(){
    this.authstatus=this.authservice.isauth;
  }
  onsignin(){
    this.authservice.signIn()
    this.router.navigate(['appareil']);
//return console.log('connexion reussie')    
  }
  
  onsignout(){
    this.authservice.signOut()
    this.authstatus=this.authservice.isauth;
    //this.router.navigate(['auth']);

  }
}
