import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly URL: string = "http://localhost:3000/api/contacts/";
  http: HttpClient;
  selectedContact: Contact;
  allContacts: Contact[];

  constructor(http: HttpClient) {
    this.http = http;
    this.selectedContact = new Contact();
    this.allContacts = [];
  }

  getContacts() {
    return this.http.get(this.URL);
  }

  postContact(contact: Contact) {
    return this.http.post(this.URL, contact);
  }

  putContact(contact: Contact) {
    return this.http.put(this.URL + contact._id, contact);
  }

  deleteContact(contact: Contact) {
    return this.http.delete(this.URL + contact._id);
  }

}
