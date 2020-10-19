import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { SearchFilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,

    CustomBarComponent,

    SearchFilterPipe,

    ClickOutsideDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
