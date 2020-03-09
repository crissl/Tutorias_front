import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-docente',
  templateUrl: './datos-docente.component.html',
  styleUrls: ['./datos-docente.component.scss']
})
export class DatosDocenteComponent implements OnInit {

  @Input() datos: String;
  @Output() propagar = new EventEmitter<string>();
  Datosp: any;
  constructor(private service: PersonalDataService) { }

  ngOnInit() {
    this.getdatosPer(this.datos);
  }

  getdatosPer(cedula: String) {
    this.service.getUsuarioCompleto(cedula).subscribe(
      data => {
        this.Datosp = data;
        // console.log(this.Datosp);
        this.propagar.emit(this.Datosp);
      }
    )
  }

}
