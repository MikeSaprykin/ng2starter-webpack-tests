/**
 * Created by Mike on 20.10.16.
 */
import { Routes, RouterModule }  from '@angular/router';

import { Register } from './register.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Register
  }
];

export const routing = RouterModule.forChild(routes);