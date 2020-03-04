import { Component, OnInit, ɵConsole } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { formatDate } from "@angular/common";
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-solicitud-acompanamientos',
  templateUrl: './solicitud-acompanamientos.component.html',
  styleUrls: ['./solicitud-acompanamientos.component.scss']
})


export class SolicitudAcompanamientosComponent implements OnInit {


  constructor(private service: PersonalDataService, private restService: RestService) { }
  datosGuardar : any;
  ncr:any;

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
    this.guardarTutorias();
   }

   guardarTutorias(){
    
      this.restService.addData(this.datosGuardar,"segu").subscribe(
        data =>{
          console.log("se guardo");
        }
      )
   }
   
   listarNrc(){
     this.restService.findData(this.id).subscribe(
       data => {

       }
     )
   }
}
