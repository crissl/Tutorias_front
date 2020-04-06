import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import {Campus} from ¿¿
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-solicitud-reforzamiento',
  templateUrl: './solicitud-reforzamiento.component.html',
  styleUrls: ['./solicitud-reforzamiento.component.scss']
})
export class SolicitudReforzamientoComponent implements OnInit {
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  constructor(private restService: RestService, public toast: ToastrService) { }

  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any = {
    id: ""
  }

  nrcs: any
  datosGuardar: any;
  spidem = 334571;
  cedula = "1725412306";
  ngOnInit() {
    this.listarNrc();
  }
  id: any
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
  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  nivel: any;
  guardar(nrc: number, codigo, asignatura, campus, periodo, nivel) {
    this.nrc = nrc;
    this.codigo = codigo;
    this.asignatura = asignatura;
    this.campus = campus;
    this.periodo = periodo;
    this.nivel = nivel; 

  }



  listarNrc() {
    this.restService.findDataById("nrcSolicitud/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        //console.log(this.nrcs)
      }
    )
  }

  guardarTutoria() {

    this.datosGuardar = {
      codigoFormularios: "2",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "REFORZAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      nrc: this.nrc,
      periodo: this.periodo,
      nivel: this.nivel,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo
    }
    this.restService.addData(this.datosGuardar,"segu").subscribe(
      data => {

        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion= "";
          this.nrcs = []
        }else{

          this.toast.error("No se creo");
        }
        
      }
    )
  }




}
