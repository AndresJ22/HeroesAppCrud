import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {
  //@Input() heroe: Heroe[] = [];  No funcionaria xq todos sus atributes deberian ser opcionales!
  @Input() heroe!: Heroe;
  constructor() { }


  ngOnInit(): void {
    // id del heroe
    // y mostrar en consola
    
  }

}
