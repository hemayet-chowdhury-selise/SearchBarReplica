import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { DummyContentComponent } from './dummy-content/dummy-content.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  { path: '', component:  DummyContentComponent},
{ path: 'results', component: CustomBarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
