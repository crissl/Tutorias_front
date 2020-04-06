import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';
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
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  aula: boolean = true
  constructor(private service: PersonalDataService, private restService: RestService,  public toast: ToastrService) { }
  datosGuardar : any;
  ncr:any;

  codigos: any;

  cedula="1725412306";
  ngOnInit() {
    this.listarCamp();

   }
   id:any
   procesaPropagar(data){
     this.id=data[0].pidm
     //console.log(data[0].pidm)
   }
   tema:any={
     tema:""
   }
codigo: any;
campus: any;
guardarC(codigo: number, campus) {
  this.codigo = codigo;
  this.campus = campus;
 

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
  
   
  //  listarCamp(){
  //    this.restService.findDataById("campus").subscribe(
  //      data => {
  //       this.codigos = data
  //       console.log("se listo");


  //      }
  //    )
  //  }

   listarCamp(){
    // this.showAlerts();
    this.restService.get('/campus').subscribe(
      data => {
        this.codigos = data;
        console.log("se listo");       
         this.datos = true;
      });
  }
  
  

  expressType: string;
  typeExpress: string[] = [ 'AULA', 'LUGAR'];

  radioOptions: FormGroup;
}





   
  