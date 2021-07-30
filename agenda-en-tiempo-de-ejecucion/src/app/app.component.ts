import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List on runtime';
  contacts:Contact[];
  inputName:string = "";
  inputSurname:string = "";
  inputEmail:string = "";
  inputTelephone:number = 0;

  constructor(){
    this.contacts = [];
    this.contacts.push(new Contact("Name", "Surname", "email@email.com", 666999666));
  }

  saveContact():void{
    this.contacts.push(new Contact(this.inputName, this.inputSurname, this.inputEmail, this.inputTelephone));
  }

  deleteContact(index:number):void{
    this.contacts.splice(index, 1);
  }
}
