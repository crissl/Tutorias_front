import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from "@angular/common";
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);


@Component({
  selector: 'app-planificacion-reforzamiento',
  templateUrl: './planificacion-reforzamiento.component.html',
  styleUrls: ['./planificacion-reforzamiento.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue:MAT_MOMENT_DATE_FORMATS},
  ],

})
export class PlanificacionReforzamientoComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any = {
    id: ""
  }

  datosGuardar: any;
  ncr: any;
  nrcs: any
  nrcs2: any
  spidem = 14159;
  cedula = "1725412306";

  campus1 = "10";
  dia1 = "SZARPGN_CAMPVA10";
  hora_INICIO = "0715";
  hora_FIN = "0915";
  horaInicioEscigido =
  dia: any;
  aulas: any;
  aulas2: any;
  horario: any;
  horariosSelected: any;

  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  inicio: any;
  fin: any;

  
  ngOnInit() {
    this.listarNrc();
    this.listarNrc2();
    this.listarHorario();
    this.listarHorarioSelecto();

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


  guardar(nrc: number, codigo, asignatura, campus, periodo, inicio, fin) {
    this.nrc = nrc;
    this.codigo = codigo;
    this.asignatura = asignatura;
    this.campus = campus;
    this.periodo = periodo;
    this.inicio = inicio;
    this.fin = fin;
  }
   
   
  listarNrc() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        console.log(this.nrcs)
      }
    )
  }
  listarNrc2() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs2 = data
        console.log(this.nrcs2)
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
      inicio: this.inicio,
      fin: this.fin,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo
    }
    this.restService.addData(this.datosGuardar,"crearPlanificacion").subscribe(
      data => {

        if(data){
          this.toast.success(data.mensaje, "El Formulario se actualizo", this.options);
          this.tema = [];
          this.observaciones.observacion= "";
          this.nrcs = []
        }else{

          this.toast.error("No se creo");
        }
        
      }
    )
  }
  listarHorario() {

    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus1,"/", this.dia1,"/",this.hora_INICIO,"/",this.hora_FIN).subscribe(
      data => {
        if (data) {
          console.log('datos2', data)
          this.aulas = data;
          console.log("se listo" + this.aulas);

        }
      }

    )
  }
  listarHorarioSelecto() {

    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus1,"/", this.dia1,"/",this.hora_INICIO,"/",this.hora_FIN).subscribe(
      data => {
        if (data) {
          console.log('datos2', data)
          this.aulas2 = data;
          console.log("se listo" + this.aulas2);

        }
      }

    )
  }
   expressType: string;
   typeExpress: string[] = [ 'Si', 'No'];
   radioOptions: FormGroup;

   expressType2: string;
   typeExpress2: string[] = [ 'AULA', 'LUGAR'];
   radioOptions2: FormGroup;
 
   date = new FormControl(moment());

   
  //Enviar array de todos los estudiantes en tabla uztasistentes 


  // CrearAsistenciaTodos() {
  //   this.restService.addData(this.estudianteM, 'crearAsistenciaLista').subscribe(
  //     data => {
  //       this.estudianteM =[]
  //     }
  //   )
  // }

  // CrearAsistenciaSolitud() {
  //   this.restService.addData(this.SolicitadoLista, 'crearAsistencia').subscribe(
  //     data => {
  //       this.SolicitadoLista=[];
  //     }
  //   )
  // }

  // CrearAsistenciaMenos14(){
  //   this.restService.addData().subscribe(
  //     data => {

  //     }
  //   )
  // }

}
