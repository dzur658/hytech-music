import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumHeaderComponent } from './album-header/album-header.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumHeaderComponent,
    PlayButtonComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
