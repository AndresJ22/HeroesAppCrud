import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private heroeServices: HeroesService,
    private router: Router) { }
  heroe!: Heroe;
  ngOnInit(): void {
    // this.heroeServices.getHeroe(this.activatedRoute.snapshot.params.id)
    //   .subscribe(data => {
    //     this.heroe = data;
    //   });
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeServices.getHeroe(id)))
      .subscribe(heroe => this.heroe = heroe);
  }
  regresar(): void {
    console.log("iso click en regresar")
    this.router.navigate(['/heroes/listado']);
  }


}
