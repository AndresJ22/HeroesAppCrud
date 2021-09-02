import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    console.log(this.activatedRoute.params);
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroe(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackbar('Registro Actualizado'));
    } else {
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(resp => {
          this.router.navigate(['/heroes/editar', resp.id]);
          this.mostrarSnackbar('Registro Creado');
        })
    }
  }
  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(result => {
      if(result) {
        this.heroesService.eliminarHeroe(this.heroe.id!)
          .subscribe(() => this.router.navigate(['/heroes']));
      }
     })

  }

  mostrarSnackbar(mensaje: string): void {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    });
  }
}
