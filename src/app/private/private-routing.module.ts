import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'prefix',
  component: TodoComponent,
  children: [{
    path: 'private/todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  }]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PrivateRoutingModule { }
