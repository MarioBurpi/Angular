import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-list-all-contacts',
  templateUrl: './list-all-contacts.component.html',
  styleUrls: ['./list-all-contacts.component.css']
})
export class ListAllContactsComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactEmitter = new EventEmitter<Contact>();


  constructor() {
    this.contact = new Contact();
  }

  ngOnInit(): void {
  }

  emitContact(contact: Contact) {
    this.contactEmitter.emit(contact);
  }



}
