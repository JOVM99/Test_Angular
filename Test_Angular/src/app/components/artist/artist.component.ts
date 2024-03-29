import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements AfterViewInit {
  artists: any = [];
  //Disposición de la columnas
  displayedColumns: string[] = ['image','name', 'popularity', 'view'];
  dataSource = new MatTableDataSource<Artists>(this.artists);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private spotify: SpotifyService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //función para aplicar el filtro una vez el usuario hace su petición, realiza la búsqueda en la api de Spotify.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.spotify.getArtistas(filterValue).subscribe((resp) => {
      this.artists = resp;
      this.dataSource.data = this.artists;
      if (this.artists.length === 0) {
        Swal.fire({
          title: 'Error en la búsqueda',
          text: 'No se encontró ningún artista con ese nombre',
          icon: 'error',
        });
      }
    });
  }
}

//Interfaz para el artista
export interface Artists {
  image:[];
  name: string;
  id: number;
  popularity: number;
}
