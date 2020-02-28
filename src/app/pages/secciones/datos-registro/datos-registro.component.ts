import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-registro',
  templateUrl: './datos-registro.component.html',
  styleUrls: ['./datos-registro.component.scss']
})
export class DatosRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public observaciones: any = {
    observacion:'lolll',
    fecha: Date.now() 
  }





}
