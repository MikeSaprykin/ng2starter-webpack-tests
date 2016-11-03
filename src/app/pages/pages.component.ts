/**
 * Created by Mike on 20.10.16.
 */
import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  template: require('./pages.component.pug'),
  styleUrls:['./pages.scss'],
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}