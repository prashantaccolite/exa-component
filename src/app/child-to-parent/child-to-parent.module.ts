import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToParentRoutingModule } from './child-to-parent-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ChildToParentRoutingModule
  ]
})
export class ChildToParentModule { }
