import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../shared/state";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import {LazyLoadingModule} from "./lazy-loading/lazy-loading.module";
import {HttpClientModule} from "@angular/common/http";
import { TranslocoRootModule } from './transloco-root.module';


@NgModule({
  declarations: [
    AppComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    LazyLoadingModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
