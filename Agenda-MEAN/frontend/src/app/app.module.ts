import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListAllContactsComponent } from './components/list-all-contacts/list-all-contacts.component'; //

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListAllContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
