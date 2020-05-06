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
  cedula : any;
  constructor(private service: PersonalDataService) { }

  ngOnInit() {
    this.estudiante[0].cedula = '';
    console.log(this.datos);
    
    this.cedula = localStorage.getItem('cedula');
    this.getdatosPer1();
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

  estudiante:any={
    cedula: ''
  };

  getdatosPer1(){
    this.service.getUsuarioCompleto(this.cedula).subscribe(
      data => {
       this.estudiante = data;
        // console.log(this.Datosp);
        //this.propagar.emit(this.Datosp);
        console.log(data)
      }
    )
  }

}
