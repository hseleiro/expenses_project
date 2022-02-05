import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public-routing.module').then( m => m.PublicRoutingModule) },
  { path: '', loadChildren: () => import('./private/private-routing.module').then( m => m.PrivateRoutingModule) },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    routes
  )]
})
export class AppRoutingModule { }
