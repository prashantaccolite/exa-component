import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'call-child'
  },
  {
    path:'call-child',
    loadChildren: () => import('./call-child/call-child.module').then(m => m.CallChildModule)
  },
  {
    path:'pass-data-to-child',
    loadChildren: () => import('./pass-data-to-child/pass-data-to-child.module').then(m => m.PassDataToChildModule)
  },
  {
    path:'content-child',
    loadChildren: () => import('./content-child/content-child.module').then(m => m.ContentChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
