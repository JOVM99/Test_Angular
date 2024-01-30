//Componente para añadir un álbum
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css'],
})
export class AddAlbumComponent {
  forma: FormGroup;
  private id: any;
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private router2: Router
  ) {
    this.id = this.router.snapshot.paramMap.get('id');

    //validaciones para el formulario
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      year: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('[0-9]{4}'),
        ],
      ],
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }

  //funciones para validar cada input cuando el usuario ya lo tocó
  get invalidName() {
    return this.forma.get('name')?.invalid && this.forma.get('name')?.touched;
  }
  get invalidYear() {
    return this.forma.get('year')?.invalid && this.forma.get('year')?.touched;
  }
  get invalidURL() {
    return this.forma.get('url')?.invalid && this.forma.get('url')?.touched;
  }

//función para guardar los datos del álbum que ingreso el usuario.
  save() {
    if (this.forma.valid) {
      Swal.fire({
        title: 'Album added successfully',
        confirmButtonText: 'Ok',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          const data = {
            name: this.forma.get('name')?.value,
            release_date: this.forma.get('year')?.value,
            images: [
              {
                url: this.forma.get('url')?.value,
              },
            ],
            artists: [
              {
                name: this.forma.get('name')?.value,
              },
            ],
          };
          console.log(data);
          this.router2.navigate(['artistDetails/', this.id], {
            state: { data: data },
          });
        }
      });
    }
  }

  //función para regresar a la pantalla anterior en caso que el usario decida cancelar.
  cancel() {
    this.router2.navigate(['artistDetails/', this.id]);
  }
}
