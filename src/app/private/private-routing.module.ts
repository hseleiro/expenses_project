import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";
import {FormBuilder} from "@angular/forms";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
   path: '',
   pathMatch: 'prefix',
   component: TodoComponent,
   children: [{
    path: 'private/todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
      }],
    },
  {
    path: 'private/profile',
    pathMatch: 'prefix',
    component: ProfileComponent,
    children: [{
      path: 'private/profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    }],
  }
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [
    FormBuilder
  ],
})
export class PrivateRoutingModule { }
