import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AllContactsComponent } from './components/all-contacts/all-contacts.component'; //

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AllContactsComponent
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
