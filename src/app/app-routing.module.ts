import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomBarComponent } from './custom-bar/custom-bar.component';

const routes: Routes = [
  { path: '', component:  CustomBarComponent},
{ path: 'results', component: CustomBarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
