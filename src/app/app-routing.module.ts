import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';


const routes: Routes = [
  {path: 'saludo', component: SaludoComponent},
  {path: 'prueba', component: PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
