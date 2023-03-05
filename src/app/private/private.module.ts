import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import {PrivateRoutingModule} from "./private-routing.module";
import {TodoModule} from "./todo/todo.module";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    ProfileModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
