import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { RestService } from 'app/service/rest.service';
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

  constructor(private restService: RestService) { }

  nrc1: any ={
    id:""
  }

  nrcs: any
  datosGuardar: any;
  spidem = 37991;
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
  guardar(nrc,codigo,asignatura,campus,periodo,nivel) {
    this.datosGuardar = {
      codigoFormularios: "2",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "ACOMPANAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      

    }
    //console.log(this.datosGuardar);
    console.log(nrc+codigo+asignatura+campus+periodo+nivel);

  }



  listarNrc() {
    this.restService.findDataById("nrcSolicitud/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        //console.log(this.nrcs)
      }
    )
  }

}
