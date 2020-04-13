import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.component.html',
  styleUrls: ['./registro-asistencias.component.scss']
})
export class RegistroAsistenciasComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  titleLista=    TutoriaConstants.LISTAESTUDIANTE;
  constructor(private service: PersonalDataService, private restService: RestService ) { }
  codA: any
  spidem = 357192 ;
  idAsistentes: any;
  estudiante: any;
  email: any;
  cedula: any;


  datosGuardar: any;
  ncr: any;
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
 

  cedula = "1725412306";
  ngOnInit() {
   }
   id:any
   procesaPropagar(data) {
     this.id = data[0].pidm
     //console.log(data[0].pidm)
   }
  tema: any = {
    tema: ""
  }
  
  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }

  listaAsistentes(spidem: number, idAsistentes, estudiante) {
    this.spidem = spidem;
    this.idAsistentes = idAsistentes;
    this.tema = tema;
  }

    listarFormuConfirma() {
      this.restService.findDataById("registroAsistencia/", this.spidem).subscribe(
        data => {
          this.codA = data
          console.log(this.codA)
        }
      )
    }

   listarNrc() {
     this.restService.findData(this.id).subscribe(
       data => {

       }
     )
   }


}
