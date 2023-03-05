import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "./components/card/card.module";
import {InfiniteScrollModule} from "./components/infinite-scroll/infinite-scroll.module";
import {TopBarModule} from "./components/top-bar/top-bar.module";
import {ButtonModule} from "./components/button/button.module";
import {BoxModule} from "./components/box/box.module";
import {IconModule} from "./components/icon/icon.module";
import {PagerModule} from "./components/pager/pager.module";
import { NumericOnlyDirective } from './directives/numeric-only.directive';
import {MatMenuModule} from "@angular/material/menu";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    NumericOnlyDirective
  ],
  exports: [
    BoxModule,
    ButtonModule,
    CardModule,
    InfiniteScrollModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    IconModule,
    NumericOnlyDirective,
    PagerModule,
    TopBarModule,
    ReactiveFormsModule
  ],
  imports: [
    BoxModule,
    ButtonModule,
    CommonModule,
    CardModule,
    IconModule,
    InfiniteScrollModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    PagerModule,
    TopBarModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
