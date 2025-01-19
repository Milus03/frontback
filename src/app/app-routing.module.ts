import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatComponent } from './adat/adat.component';

const routes: Routes = [
  { path: '', component: AdatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }