//Servicio para realizar las peticiones a la API de Spotify
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: any
  constructor(private http: HttpClient) {
  }

  //Función para obtener el token
  getToken() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(
          `7c1114f3dd7f4a81931588119a5c7400:6d612bfc532c42aea2af76788978898d`
        ),
    });
    const params = new HttpParams().set('grant_type', 'client_credentials');
    return this.http
      .post('https://accounts.spotify.com/api/token', params.toString(), {
        headers,
      })
  }

//Función para realizar todas las peticiones a la API
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    this.getToken().subscribe((resp:any) => {
      this.token= resp.access_token
    })
    const headers = new HttpHeaders({
      Authorization:
        `Bearer ${this.token}`,
    });
    return this.http.get(url, { headers });
  }

  //Función para obtenr los artista según lo que ingresó el usuario
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  //Función para obtener el artista seleccionado
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  //Función para obtener el Top Tracks de canciones del artista
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => {
        return data['tracks'];
      })
    );
  }

  //Función para obtener los álbumes del artista
  getAlbums(id: string) {
    return this.getQuery(`artists/${id}/albums?limit=10`).pipe(
      map((data: any) => {
        return data.items;
      })
    );
  }
}
