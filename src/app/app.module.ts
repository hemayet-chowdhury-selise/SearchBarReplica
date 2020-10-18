import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyBarComponent } from './easy-bar/easy-bar.component';
import { CustomBarComponent } from './custom-bar/custom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyBarComponent,
    CustomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
