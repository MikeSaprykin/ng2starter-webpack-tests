/**
 * Created by Mike on 20.10.16.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Register } from './register.component';
import { routing }       from './register.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    Register
  ]
})
export default class RegisterModule {}