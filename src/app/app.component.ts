import {Component, ViewEncapsulation} from '@angular/core';
import '../assets/scss/app.scss';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.pug',
  //Global style component without extraction
  styleUrls: ['../assets/scss/app.scss'],
  //encapsulation - none - to provide styling globally shared
  // from root component to its children
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent { }
