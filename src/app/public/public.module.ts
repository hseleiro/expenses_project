import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicRoutingModule} from "./public-routing.module";
import { PublicComponent } from './public.component';
import {WelcomeModule} from "./welcome/welcome.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    WelcomeModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
