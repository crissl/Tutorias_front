import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { ScaleControlStyle } from '@agm/core/services/google-maps-types';


//import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../Formatos/format-datepicker';

const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

interface Dia {
  dia: string;
  nombre: string;
}


@Component({
  selector: 'app-planificacion-acompanamiento',
  templateUrl: './planificacion-acompanamiento.component.html',
  styleUrls: ['./planificacion-acompanamiento.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }

  ],

})

export class PlanificacionAcompanamientoComponent implements OnInit {
  @Input() registro: any
  @Input() datos: boolean;
  @Output() propagar = new EventEmitter<string>();
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }


  datosGuardar: any;
  ncr: any;
  codigos: any;
  //spidem = 357192;
  spidem = 14159 ;
  cedula = "1725412306";
  id: any
  campus1 = "10";
  dia1 = "SZARPGN_CAMPVA10";
  campus: any;
  dia: any;
  aula: any;
  aulas: any;
  horario: any;
  // hora_INICIO: any;
  // hora_FIN: any;
  aula1: any;
  publico: string;


  myDate: Dia[] = [
    { dia: 'domingo-1', nombre: 'SZARPGN_CAMPVA15' },
    { dia: 'lunes-2', nombre: 'SZARPGN_CAMPVAR9' },
    { dia: 'martes-3', nombre: 'SZARPGN_CAMPVA10' },
    { dia: 'miercoles-4', nombre: 'SZARPGN_CAMPVA11' },
    { dia: 'jueves-5', nombre: 'SZARPGN_CAMPVA12' },
    { dia: 'viernes-6', nombre: 'SZARPGN_CAMPVA13' },
    { dia: 'domingo-7', nombre: 'SZARPGN_CAMPVA14' }
  ];



  hora_INICIO: any = {
    hora_INICIO: ""
  }

  hora_FIN: any = {
    hora_FIN: ""
  }
  tema: any = {
    tema: ""
  }
  codigoCampus: any;

  campusSelected: any;
  horarioSelected: any;

  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  }

  ngOnInit() {
    this.listarCamp();
    //this.listarHorario();

  }
  procesaPropagar(data) {
    this.id = data[0].pidm
    //console.log(data[0].pidm)
  }

  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }
  guardar(codigo: number, campus) {
    this.codigoCampus = codigo;
    this.campus = campus;

  }

  guardar2(aula, horario, hora_INICIO, hora_FIN) {
    this.aula = aula;
    this.horario = horario;
    this.hora_INICIO = hora_INICIO;
    this.hora_FIN = hora_FIN;
  }

  guardarAcompanamiento() {
    console.log(this.fechaTutoria)
    this.datosGuardar = {
      codigoFormularios: "3",
      interacion: "0",
      fechaFormulario: Date.now(),
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "PLANIFICACION ACOMPANAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      publico: this.publico,
      aula: this.aula.aula,
      fechaTutoria: this.fechaTutoria,
      horaInicio: this.horaInicio,
      horaFin: this.horaFin,
      fechaCrea: Date.now(),
      usuaCrea: this.spidem,
      campcode: this.codigoCampus
    }
    console.log(this.datosGuardar);
    //this.guardarTutorias();
    if (this.publico == 'T') {
      this.buscartodos();
    } else {
      this.buscaSolicitado();
    }
  }


  guardarTutorias() {
    console.log('guardar')
    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {
        if (data) {
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion = "";

        } else {

          this.toast.error("No se creo");
        }

      }
    )
  }


  listarCamp() {
    this.restService.get('getCampus').subscribe(
      data => {
        console.log(data);
        if (data) {
          console.log('datos', data)
          this.codigos = data;
          // console.log("se listo" + this.codigos);
          //console.log("se listo" + this.codigos.codigo);
        }
      }
    )
  }
  dias: number = 10;

  horaInicio: any;
  horaFin: any;
  listarHorario(codigo: number, horarioInicio: any, horarioFin: any) {
    //this.horaInicio = codigo;
    this.restService.get('horario/' + codigo + '/' + this.dia).subscribe(
      data => {
        if (data.mensaje) {

          this.toast.info(data.mensaje, "Para este campus", this.options);


        } else {
          this.toast.success(data.mensaje, "Seleccione ahora el aula-horario", this.options);

          this.aulas = data;

        }
        //this.horaInicio = data.hora_INICIO;


      }
    )
  }
  horaFormatoI: any;
  horaFormatoF: any;
  selectHour(aula: any) {
    this.horaInicio = aula.hora_INICIO;
    this.horaFin = aula.hora_FIN
    console.log(this.horaInicio)
    this.horaFormatoI = (this.horaInicio).slice(0, 2) + ":" + (this.horaInicio).slice(2);
    this.horaFormatoF = (this.horaFin).slice(0, 2) + ":" + (this.horaFin).slice(2);

  }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];

  radioOptions: FormGroup;

  date = new FormControl(moment());

  Todos: any;
  buscartodos() {
    this.restService.get('convocadosTodosAcompanamiento/' + this.spidem).subscribe(
      data => {
        console.log(data)
        this.Todos = data;
        this.listarEstudiantes();
      }
    )

  }

  buscaSolicitado() {
    this.restService.get('/convocadosSolicitadosAcompanamiento/' + this.spidem).subscribe(
      data => {
        console.log('solicitado')
      }
    )
  }

  fecha1: any;
  fechaTutoria: any;
  yourFunctionName(event: any) {
    // const data = event;
    // const  formato = data.getDay() + '-' + (data.getMonth() + 1)  + '-' + data.getFullYear();
    // console.log(formato);
    //const formattedDate = (data.getMonth() + 1) + '-' + data.getFullYear();
    // console.log(event);
    const stringified = JSON.stringify(event.value);

    this.fechaTutoria = stringified;

    //const dob = stringified.substring(1, 11);
    // this.applicant.contact[0].dob = dob;
    //console.log(dob)
  }
  public estudianteM: any[] = []
  estudianteA: any;

  //busca el ultimo id que se ingresó y lo tra para ingresarlo en uztsolicitudes
  BusacarIdPlanif(){
    this.restService.getData('').subscribe(
      data =>{
        
      }
    )

  }

  //función que crea un array con todos los estudiantes(cuando la selección es todos) que va a insertar en la tabla uztsolicitud
  listarEstudiantes() {
    for (let estudiante of this.Todos) {
      console.log(estudiante);
      this.estudianteM.push({
        CODIGO_UZTPLANIF: 9,
        CODIGO_UZGTFORMULARIOS:3,// codigo para la plificacion acompañamiento 
        UZTASISTENTES_ID: estudiante.id,
        UZTASISTENTES_CEDULA: estudiante.cedula,
        UZTASISTENTES_nombre: estudiante.nombres,
        SPRIDEN_PIDM:estudiante.pidm,//codigo pidm del estudiante que va a repetir  
        correo_PERSONAL: estudiante.correo_PERSONAL,
        UZTASISTENTES_EMAIL: estudiante.correo_INSTITUCIONAL,
        UZTASISTENTES_USUA_CREA: this.spidem,//codigo pidm  del tutor que crea la planificacion -- cambio a variable localstorage
        UZTASISTENTES_estado: 'A'
      })
    }
    console.log(this.estudianteM);
  }



}







