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

  constructor(private restService: RestService ) { }

 

  datosGuardar : any;

  cedula="1725412306";
  ngOnInit() {
   }
   id:any
   procesaPropagar(data){
     this.id=data[0].pidm
     //console.log(data[0].pidm)
   }
   tema:any={
     tema:""
   }

   public observaciones: any = {
    observacion:"",
    fecha: Date.now(),
  }
  guardar(){
    this.datosGuardar = {
      codigoFormularios : "5",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "ACOMPANAMIENTO",
      spridenPidm: this.id ,
      tema:this.tema.tema,
      observacion: this.observaciones.observacion,
      estado:"A"
    }
    console.log(this.datosGuardar);
   }

   estudianteNRC(){
      
   }


}
