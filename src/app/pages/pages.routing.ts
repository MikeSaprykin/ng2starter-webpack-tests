/**
 * Created by Mike on 20.10.16.
 */
import { Routes, RouterModule }  from '@angular/router';
import {Pages} from "./pages.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren: './index/index.module' },
      {
        path: 'login',
        loadChildren: './login/login.module'
      },
      {
        path: 'register',
        loadChildren: './register/register.module'
      },
    ]
  }
];

export const routing = RouterModule.forChild(routes);