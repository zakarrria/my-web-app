import { OnInit } from '@angular/core';

export class appareilservice {
    appareils = [
        {
          id:1,
          name:'machine',
         status:'allumé'
        } ,
        {
          id:2,
          name:'télévision',
         status:'allumé'
        } ,
        {
          id:3,
          name:'microonde',
         status:'allumé'
        }
      ];
      getappareilbyid(id:number){
        const appareils=this.appareils.find(
        (appareilobject:any)=>{
          return appareilobject.id===id
        }
        );
        return appareils
      }
    switchonone(index: number){
        this.appareils[index].status='allumé'
    }
    switchoffone(index: number){
        this.appareils[index].status='éteindre'
    }

}
