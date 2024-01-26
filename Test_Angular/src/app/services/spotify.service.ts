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

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
}
