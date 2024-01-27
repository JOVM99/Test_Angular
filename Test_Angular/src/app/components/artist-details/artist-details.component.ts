import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
  artist: any;
  topTracks: any;
  loading:boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getTopTracks(params['id']);
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.loading = false;
      this.artist = artista;
    });
  }
  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks)
      this.loading = false;
    })
  }

}
