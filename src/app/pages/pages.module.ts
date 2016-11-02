/**
 * Created by Mike on 20.10.16.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';

import { routing }       from './pages.routing';
import {Pages} from "./pages.component";

@NgModule({
  imports: [
      CommonModule,
      routing,
      BrowserModule],
  declarations: [Pages]
})
export class PagesModule {
}