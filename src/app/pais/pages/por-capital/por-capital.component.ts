import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: []
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capitales: Capital[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (capitales) => {
        console.log('respuesta', capitales);
        this.capitales = capitales;
      },
      (err) => {
        console.log('error')
        console.info(err);
        this.hayError = true;
        this.capitales = [];
      }
    );

  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }

}
