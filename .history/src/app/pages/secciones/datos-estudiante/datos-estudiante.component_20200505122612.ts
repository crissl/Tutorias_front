import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { DatosAcademicosComponent } from '../datos-academicos/datos-academicos.component';
import { TutoriaConstants } from 'app/constants/constants';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-datos-estudiante',
  templateUrl: './datos-estudiante.component.html',
  styleUrls: ['./datos-estudiante.component.scss', './datos-estudiante.component.css']
})
export class DatosEstudianteComponent implements OnInit {
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;

  @Input() datos: any;
 // @Output() propagar = new EventEmitter<string>();
  Datosp: any;
  cedula1 : string;
  constructor(private service: PersonalDataService) { }

  ngOnInit() {
    console..log(this.datos);
    //this.getdatosPer(this.datos);
    //this.cedula1 = localStorage.getItem('cedula')
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

  estudiante:any;

  getdatosPer1(){
    this.service.getUsuarioCompleto(this.cedula1).subscribe(
      data => {
       this.estudiante = data;
        // console.log(this.Datosp);
        //this.propagar.emit(this.Datosp);
        console.log(data)
      }
    )
  }

}
