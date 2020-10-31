import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { DummyContentComponent } from './dummy-content/dummy-content.component';


const routes: Routes = [
  {path: '', component: CustomBarComponent},
  { path: 'readmore', component:  DummyContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
