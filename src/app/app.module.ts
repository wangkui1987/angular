import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.router";
import { ListComponent } from './component/list/list.component';
import {HeroComponent} from "./component/hero/hero.component";
import { BoolPipe } from './pipe/bool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
