import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  titleLista=    TutoriaConstants.LISTAESTUDIANTE;

  constructor(private service: PersonalDataService, private restService: RestService) { }

  alumno: any
  spidem = 14159 ;
  codigoPlanificacion = 53;
  idAsistentes: any;
  estudiante: any;
  email: any;
  cedula1: any;
  estado: any;
  registrar: string;

  datosGuardar: any;
  ncr: any;
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
 

  cedula = "1725412306";
  ngOnInit() {
    this.listarFormuConfirma()
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

  listaAsistentes(codigoPlanificacion: number, idAsistentes, estudiante, email, cedula1, estado) {
    this.codigoPlanificacion = codigoPlanificacion;
    this.idAsistentes = idAsistentes;
    this.estudiante = estudiante;
    this.email = email;
    this.cedula = cedula1;
    this.estado = estado;

  }

    listarFormuConfirma() {
      this.restService.findDataById("registroAsistencia/", this.codigoPlanificacion).subscribe(
        data => {
          this.alumno = data
          console.log(this.alumno)
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