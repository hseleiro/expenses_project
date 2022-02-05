import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import {PrivateRoutingModule} from "./private-routing.module";
import {TodoModule} from "./todo/todo.module";

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
