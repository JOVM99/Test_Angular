import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistComponent } from './components/artist/artist.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardTracksComponent } from './components/card-tracks/card-tracks.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { AddAlbumComponent } from './components/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    NoimagePipe,
    ArtistDetailsComponent,
    LoadingComponent,
    CardItemComponent,
    CardTracksComponent,
    DomSeguroPipe,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
