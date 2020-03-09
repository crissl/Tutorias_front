import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { DatosAcademicosComponent } from '../datos-academicos/datos-academicos.component';

@Component({
  selector: 'app-datos-estudiante',
  templateUrl: './datos-estudiante.component.html',
  styleUrls: ['./datos-estudiante.component.scss']
})
export class DatosEstudianteComponent implements OnInit {

  @Input() datos:String;
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
        //console.log(this.Datosp);
        this.propagar.emit(this.Datosp);
      }
    )
  }

}
