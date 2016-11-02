/**
 * Created by Mike on 20.10.16.
 */
import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: '<div>Login Component</div>'
})
export class Login{

  constructor() {
  }

  ngOnInit() {
      console.log('Login')
  }
}