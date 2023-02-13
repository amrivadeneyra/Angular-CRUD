import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { ReadDataComponent } from './read-data/read-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    ReadDataComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
