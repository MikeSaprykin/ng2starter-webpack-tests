/**
 * Created by Mike on 20.10.16.
 */
import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'index',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: '<div>Index Component</div>'
})
export class Index{

  constructor() {
  }

  ngOnInit() {
    console.log('index')
  }
}