import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App2Component } from './app2.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule { }
