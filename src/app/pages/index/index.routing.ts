/**
 * Created by Mike on 20.10.16.
 */
import { Routes, RouterModule }  from '@angular/router';

import { Index } from './index.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Index
  }
];

export const routing = RouterModule.forChild(routes);