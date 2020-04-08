import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { Campus } from 'app/models/campus.model';

import { FormGroup } from '@angular/forms';

const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);
interface Dias {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-planificacion-acompanamiento',
  templateUrl: './planificacion-acompanamiento.component.html',
  styleUrls: ['./planificacion-acompanamiento.component.scss']
})
export class PlanificacionAcompanamientoComponent implements OnInit {
  @Input() datos: boolean;
  @Output() propagar = new EventEmitter<string>();
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  aula: boolean = true
  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }

  datosGuardar: any;
  ncr: any;
  codigos: any;
  spidem = 357192;
  cedula = "1725412306";
  campus1 = 10;
  dia1= "SZARPGN_CAMPVA10";

  foods: Dias[] = [
    {value: 'domingo-1', viewValue: 'SZARPGN_CAMPVA15'},
    {value: 'pizza-1', viewValue: 'SZARPGN_CAMPVAR9'},
    {value: 'pizza-1', viewValue: 'SZARPGN_CAMPVA10'},
    {value: 'pizza-1', viewValue: 'SZARPGN_CAMPVA11'},
    {value: 'pizza-1', viewValue: 'SZARPGN_CAMPVA12'},
    {value: 'pizza-1', viewValue: 'SZARPGN_CAMPVA13'},
    {value: 'tacos-2', viewValue: 'SZARPGN_CAMPVA14'}
  ];
  

  id: any
  tema: any = {
    tema: ""
  }
  codigoCampus: any;
  campus: any;
  campusSelected: any;
  dia: any;
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  }

  ngOnInit() {
    this.listarCamp();

  }
  procesaPropagar(data) {
    this.id = data[0].pidm
    //console.log(data[0].pidm)
  }

  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }

  guardarAcompanamiento() {
    this.datosGuardar = {
      codigoFormularios: "5",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "PLANIFICACION ACOMPANAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A"
    }
    this.guardarTutorias();
  }
  

  guardarTutorias() {

    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {

        console.log("se guardo");
      }
    )
  }

  guardar(codigo: number, campus) {
    this.codigoCampus = codigo;
    this.campus = campus;
   
  }


  // listCamp(codigoCampus: number, campus) {
  //   this.codigoCampus= codigoCampus;
  //   this.campus = campus;

  // }
  // listarCampus() {
  //   this.restService.get("campus").subscribe(
  //     datos => {
  //       if (datos) {
  //         console.log('datos', datos)
  //         this.codigos = datos;
  //         this.propagar.emit(this.campus);
  //         console.log(" se listo " + this.codigos)
  //       }
  //     }
  //   )
  // }
  listarCamp(){
    this.restService.get('getCampus').subscribe(
      data => {
        if (data) {
                   console.log('datos', data)
       this.codigos=data;
       console.log("se listo" + this.codigos);  
       console.log("se listo" + this.codigos.codigo);  
        }
      }
    )
  }
  listarHorario(){

    this.restService.findDataById('horario/campus1/dia', this.spidem).subscribe(

    )
    }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];

  radioOptions: FormGroup;
}







