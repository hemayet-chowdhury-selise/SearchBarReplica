import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { DummyContentComponent } from './dummy-content/dummy-content.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path: '', component: TodoComponent },
  { path: 'readmore', component:  DummyContentComponent},
  {path: 'searchbar', component:  CustomBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
