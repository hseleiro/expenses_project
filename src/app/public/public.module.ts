import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicRoutingModule} from "./public-routing.module";
import { PublicComponent } from './public.component';
import {WelcomeModule} from "./welcome/welcome.module";

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    WelcomeModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
