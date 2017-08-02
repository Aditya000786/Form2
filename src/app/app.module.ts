import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediumFormComponent } from './medium-form/medium-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScotchFormComponent } from './scotch-form/scotch-form.component'
import { AddressComponent } from './address.component';

@NgModule({
  declarations: [
    AppComponent,
    MediumFormComponent,
    ScotchFormComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
