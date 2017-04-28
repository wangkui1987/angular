
import {Routes} from "@angular/router";
import {ListComponent} from "./component/list/list.component";
import {HeroComponent} from "./component/hero/hero.component";

export const rootRouterConfig:Routes= [
  {
    path:"",
    redirectTo:"/list",
    pathMatch:"full"
  },
  {
    path:"list",
    component:ListComponent
  },
  {
    path:"hero/:id",
    component:HeroComponent
  },
  {
    path:'**',
    component:ListComponent
  }
];
