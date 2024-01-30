import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';

const routes: Routes = [
  { path: 'artists', component: ArtistComponent },
  {
    path: 'artistDetails/:id',
    component: ArtistDetailsComponent,
  },
  { path: 'addAlbum/:id', component: AddAlbumComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'artists' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
