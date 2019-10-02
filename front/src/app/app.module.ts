import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PostItBrowseComponent } from './component/post-it-browse/post-it-browse.component';
import { PostItEditComponent } from './component/post-it-edit/post-it-edit.component';
import { SingleNoteComponent } from './component/single-note/single-note.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItBrowseComponent,
    PostItEditComponent,
    SingleNoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
