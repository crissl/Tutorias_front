import { Component, OnInit, Input } from '@angular/core';

import { ScaleControlStyle } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-datos-registro',
  templateUrl: './datos-registro.component.html',
  styleUrls: ['./datos-registro.component.scss']
})
export class DatosRegistroComponent implements OnInit {
  titleRegistro = TutoriaConstants.D
  @Input() registro:any
  constructor() { }

  ngOnInit() {
  
  }

  





}
