import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-planificacion-acompanamiento',
  templateUrl: './planificacion-acompanamiento.component.html',
  styleUrls: ['./planificacion-acompanamiento.component.scss']
})
export class PlanificacionAcompanamientoComponent implements OnInit {
  aula: boolean = true
  constructor(private service: PersonalDataService, private restService: RestService ) { }
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
      tipoTutoria: "PLANIFICACION ACOMPANAMIENTO",
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
  
   @Input()
   labelPosition: 'before' | 'after' 
   

}
@Output({});
  

   
  