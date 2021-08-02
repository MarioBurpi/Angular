import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../../services/contact.service'

declare var M: any;  //esta variable se declara para ligarla a Materialize

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'], 
})
export class ContactsComponent implements OnInit {

  contactService: ContactService;

  constructor(contactService: ContactService) { 
    this.contactService = contactService;
  }

  ngOnInit(): void {
  }

  //recibe un formulario y lo resetea
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.contactService.selectedContact = new Contact();
      M.toast({html: "Saved Successfully"});
    }
  }

  //añade contacto con los datos del formulario
  addContact(form: NgForm){
    this.contactService.postContact(form.value)
    .subscribe(res => {
      //console.log(res);
      this.resetForm(form);

    });
  }
/*
  getAllContacts(){
    this.contactService.getContacts().subscribe( res => {
      this.contactService.allContacts = res as Contact[];
    });
  }
*/
}
