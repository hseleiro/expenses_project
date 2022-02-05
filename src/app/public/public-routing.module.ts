import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'prefix',
  component: WelcomeComponent,
  children: [{
    path: 'public/welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  }]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PublicRoutingModule {}
