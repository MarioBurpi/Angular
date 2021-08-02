import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  contactService: ContactService;

  constructor(contactService: ContactService) { 
    this.contactService = contactService;
  }


  ngOnInit(): void {
  }

}
