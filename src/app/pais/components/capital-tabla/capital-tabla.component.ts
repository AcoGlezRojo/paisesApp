import { Component, Input, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [
  ]
})
export class CapitalTablaComponent implements OnInit {

  @Input() capitales: Capital[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
