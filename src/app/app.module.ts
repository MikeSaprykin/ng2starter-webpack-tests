import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {PagesModule} from "./pages/pages.module";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    routing,
    PagesModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
