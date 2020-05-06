import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { DatosAcademicosComponent } from '../datos-academicos/datos-academicos.component';
import { TutoriaConstants } from 'app/constants/constants';
@Component({
  selector: 'app-datos-docente',
  templateUrl: './datos-docente.component.html',
  styleUrls: ['./datos-docente.component.scss', './datos-docente.component.css']
})
export class DatosDocenteComponent implements OnInit {
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;

  @Input() datos: String;
  @Output() propagar = new EventEmitter<string>();
  Datosp: any;
  constructor(private service: PersonalDataService) { }

  ngOnInit() {
  }
  


  // getdatosPer(cedula: String) {
  //   this.service.getUsuarioCompleto(cedula).subscribe(
  //     data => {
  //       this.Datosp = data;
  //       // console.log(this.Datosp);
  //       this.propagar.emit(this.Datosp);
  //     }
  //   )
  // }

}
