/**
 * Created by Mike on 20.10.16.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Index } from './index.component';
import { routing }       from './index.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    Index
  ]
})
export default class IndexModule {}