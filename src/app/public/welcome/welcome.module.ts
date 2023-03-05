import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { TranslocoModule } from "@ngneat/transloco";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    TranslocoModule,
    SharedModule,
  ]
})
export class WelcomeModule { }
