import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { SearchFilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { ReadMoreComponent } from './read-more/read-more.component';
import { DummyContentComponent } from './dummy-content/dummy-content.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { AutoResizeDirective } from './auto-resize.directive';
import { NoteComponent } from './todo/note/note.component';
import { NoteDetailComponent } from './todo/note-detail/note-detail.component';


@NgModule({
  declarations: [
    AppComponent,

    CustomBarComponent,

    SearchFilterPipe,

    ReadMoreComponent,

    DummyContentComponent,

    TodoComponent,

    ClickOutsideDirective,

    AutoResizeDirective,

    NoteComponent,

    NoteDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
