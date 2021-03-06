import { Injectable } from '@angular/core';
import { Auto, Person, Fahrt } from './classes';



@Injectable()
export class DataService {

  users : Array<Person>;
  angeboteneFahrten : Array<Fahrt>;
  angemeldeterUser : Person;


  constructor() { 
    this.angemeldeterUser = null;
    this.users = new Array<Person>();
    this.angeboteneFahrten = new Array<Fahrt>();
    this.users.push(new Person("Maier","Hans","hansmaier@mail.com","1234",new Date(),"trans",new Auto()));
    this.users.push(new Person("ads","Hans","ads","1234",new Date(),"trans",new Auto()));
  }

  
  updateAngeboteneFahrten(){
    let newAngFahrt = new Array<Fahrt>();
    this.users.forEach(user => {
      user.angeboteneFahrten.forEach(fahrt => {
        newAngFahrt.push(fahrt);
      });
    });
    this.angeboteneFahrten = newAngFahrt;
    return this.angeboteneFahrten;
  }


  save(){
    console.log("start save");
    localStorage.setItem("users",JSON.stringify(this.users));
    console.log("gesaved");
  }
  load(){
    console.log("start load");
    this.users = JSON.parse(localStorage.getItem("users"));
    console.table(this.users);
  }
  

}


