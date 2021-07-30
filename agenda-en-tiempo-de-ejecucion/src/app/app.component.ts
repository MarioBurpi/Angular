import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List on runtime';
  contacts: Contact[];
  groups: string[];
  inputGroup = "";
  inputName: string = "";
  inputSurname: string = "";
  inputEmail: string = "";
  inputTelephone: number = 0;
  selectedGroup = "";

  constructor() {
    this.contacts = [];
    this.groups = ["Friends", "Family"];
    this.contacts.push(new Contact("Group", "Name", "Surname", "email@email.com", 666999666));
  }

  saveContact(): void {
    if (this.inputGroup != "") {
      this.contacts.push(new Contact(this.inputGroup, this.inputName, this.inputSurname, this.inputEmail, this.inputTelephone));
      this.groups.push(this.inputGroup);
    } else {
      this.contacts.push(new Contact(this.selectedGroup, this.inputName, this.inputSurname, this.inputEmail, this.inputTelephone));
    }
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }

  createGroup(string: string) {

  }
}
