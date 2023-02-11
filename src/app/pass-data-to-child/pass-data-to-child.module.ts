import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassDataToChildRoutingModule } from './pass-data-to-child-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PassDataToChildRoutingModule
  ]
})
export class PassDataToChildModule { }
