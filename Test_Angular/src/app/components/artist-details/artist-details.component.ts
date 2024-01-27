import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent {
  artist: any;
  topTracks: any;
  albums: any;
  loading: boolean;
  selectedAlbums: any = [];
  selectedTracks: any = [];
  selectedAlbumsData: any = [];
  selectedTracksData: any = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getTopTracks(params['id']);
      this.getAlbums(params['id']);
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe((artista) => {
      this.loading = false;
      this.artist = artista;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
      this.loading = false;
    });
  }
  getAlbums(id: string) {
    this.spotify.getAlbums(id).subscribe((data) => {
      this.albums = data;
      this.loading = false;
    });
  }

  onChanges() {
    // Filtrar álbumes seleccionados
    this.selectedAlbumsData = this.albums.filter((album:any) => this.selectedAlbums.includes(album));
    console.log('Cambio en los álbumes:', this.selectedAlbumsData);
  }

  onChanges2() {
    // Filtrar top tracks seleccionados
    this.selectedTracksData = this.topTracks.filter((track:any )=> this.selectedTracks.includes(track));
    console.log('Cambio en los top tracks:', this.selectedTracksData);
  }
}
