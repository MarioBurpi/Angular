import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../../services/contact.service'

declare var M: any;  //esta variable se declara para ligarla a Materialize

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  cardTitle: string = "New Contact";

  contactService: ContactService;
  selectedContact: Contact;
  allContacts: Contact[];

  constructor(contactService: ContactService) {
    this.contactService = contactService;
    this.selectedContact = new Contact();
    this.allContacts = [];
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  //recibe un formulario y lo resetea
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactService.selectedContact = new Contact();
    }
  }

  //añade contacto con los datos del formulario.  El formulario tiene un campo oculto para _id, que se rellena cuando queremos editar
  //el contacto.  Cuando se crea un nuevo contacto, este campo esta vacio.
  addContact(form: NgForm) {
    if (form.value._id) {
      this.contactService.putContact(form.value)
        .subscribe(res => {
          M.toast({ html: `Contact modified` });
          this.resetForm(form);
          this.getAllContacts();
          this.cardTitle = "New Contact";
        });
    } else {
      this.contactService.postContact(form.value)
        .subscribe(res => {
          M.toast({ html: `Saved Successfully` });
          this.resetForm(form);
          this.getAllContacts();
        });
    }
  }

  getAllContacts() {
    var array: Contact[] = [];
    this.contactService.getContacts()
      .subscribe(res => {
        this.allContacts = res as Contact[];
      });
  }

  editContact(contact: Contact) {
    this.cardTitle = "Edit Contact";
    window.scroll(0,0);
    this.contactService.selectedContact = contact;
    this.contactService.putContact(contact);
  }

  deleteContact(contact: Contact) {
    console.log("ID: " + contact._id);
    this.contactService.deleteContact(contact);
    this.getAllContacts();
  }
}
