
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedasPageComponent } from './page/monedas-page/monedas-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"monedas", component: MonedasPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
