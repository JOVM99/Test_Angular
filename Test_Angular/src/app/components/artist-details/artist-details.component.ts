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
  newAlbum: any;
  albums: any;
  loading: boolean;
  selectedAlbums: any = [];
  selectedTracks: any = [];
  selectedAlbumsData: any = [];
  selectedTracksData: any = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;

    this.router.params.subscribe((params) => {
      this.newAlbum = history.state?.data;
      this.getTopTracks(params['id']);
      this.getAlbums(params['id']);
      this.getArtista(params['id']);
    });
  }

  //Función para llamar al servicio de obtener un artista
  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe((artista) => {
      this.loading = false;
      this.artist = artista;
    });
  }
   //Función para llamar al servicio de Top tracks de  un artista
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
      this.loading = false;
    });
  }

   //Función para llamar al servicio de obtener los álbumes de un artista
  getAlbums(id: string) {
    this.spotify.getAlbums(id).subscribe((data) => {
      this.albums = data;
      if (this.newAlbum !== undefined) {
        this.albums.push(this.newAlbum);
        console.log(this.albums);
      }
      this.loading = false;
    });
  }

 //Función para filtrar álbumes seleccionados
  onChanges() {
    this.selectedAlbumsData = this.albums.filter((album: any) =>
      this.selectedAlbums.includes(album)
    );
    console.log('Cambio en los álbumes:', this.selectedAlbumsData);
  }

 //Función para filtrar top tracks seleccionados
  onChanges2() {
    this.selectedTracksData = this.topTracks.filter((track: any) =>
      this.selectedTracks.includes(track)
    );
    console.log('Cambio en los top tracks:', this.selectedTracksData);
  }
}
