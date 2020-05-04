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
import { DatePipe } from '@angular/common';

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

  pipe = new DatePipe('en-US');
  now = Date.now();
  fechaActual = this.pipe.transform(this.now, 'yyyy-MM-dd')

  @Input() registro: any
  @Input() datos: boolean;
  @Output() propagar = new EventEmitter<string>();
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  usuario: any;

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }

  lugarTutoria:any;
  datosGuardar: any;
  ncr: any;
  codigos: any;
  //spidem = 357192;
  // spidem = 14159;
  spidem = 14159;

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
  observaciones: any;
  lLugar:any;
  lHorarioInicio:any;
  lHorarioFin:any;
  nivel:any
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

  // public observaciones: any = {
  //   observacion: "",
  //   fecha: Date.now(),
  // }
  guardar(codigo: number, campus) {
    this.codigoCampus = codigo;
    this.campus = campus;

  }

  // guardar2(aula, horario, hora_INICIO, hora_FIN) {
  //   this.nivel = nivel;    
  //   this.aula = aula;
  //   this.horario = horario;
  //   this.hora_INICIO = hora_INICIO;
  //   this.hora_FIN = hora_FIN;
  // }

  guardarAcompanamiento() {
    if(this.expressType==='AULA'){

    }else if(this.expressType ==='LUGAR'){
      this.aula = this.lLugar;
      this.horaInicio = this.lHorarioInicio
      this.horaFin = this.lHorarioFin
      this.codigoCampus= undefined
      this.nivel= undefined
      //console.log(this.lLugar,this.lHorarioInicio,this.lHorarioFin);
    }
    console.log(this.fechaTutoria)
    this.datosGuardar = {
      codigoFormularios: "3",
      interacion: "0",
      fechaFormulario: this.fechaActual,
      tipoPersona: "DOCENTE",
      tipoTutoria: "ACOMPAÑAMIENTO",
      spridenPidm: this.spidem,
      tema: this.tema.tema,
      observacion: this.observaciones,
      estado: "A",
      publico: this.publico,
      nivel:this.nivel,
      aula: this.aula,
      fechaTutoria: this.fechaTutoria,
      horaInicio: this.horaInicio,
      horaFin: this.horaFin,
      fechaCrea: this.fechaActual,
      usuaCrea: this.spidem,
      campCode: this.codigoCampus
    }
    console.log(this.datosGuardar);
    console.log(this.expressType);
    this.guardarTutorias();
  }


  guardarTutorias() {
    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {
        if (data) {
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones = "";
          this.BuscarIdPlanif();
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
          console.log(this.aulas);
        }
        //this.horaInicio = data.hora_INICIO;


      }
    )
  }
  horaFormatoI: any;
  horaFormatoF: any;
  selectHour(aula: any) {
    this.aula =aula.aula;
    this.horaInicio = aula.hora_INICIO;
    this.horaFin = aula.hora_FIN;
    this.nivel = aula.nivel
    console.log(this.horaInicio);

    this.horaFormatoI = (this.horaInicio).slice(0, 2) + ":" + (this.horaInicio).slice(2);
    this.horaFormatoF = (this.horaFin).slice(0, 2) + ":" + (this.horaFin).slice(2);

  }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];
  radioOptions: FormGroup;
  date = new FormControl(moment());
  listaEstudiantes:any;

  

  fecha1: any;
  fechaTutoria: any;
  yourFunctionName(event: any) {

    const myFormattedDate = this.pipe.transform(event.value, 'yyyy-MM-dd')
    console.log(myFormattedDate);
    this.fechaTutoria = myFormattedDate;
  }
  public estudianteM: any[] = []
  estudianteA: any;

  idPlanificacion: any;
  //busca el ultimo id que se ingresó y lo trae para ingresarlo en uztsolicitudes
  BuscarIdPlanif() {
    this.restService.getData('ultimoPlanif').subscribe(
      data => {
        if (data) {
          this.idPlanificacion = data;
          if (this.publico == 'T') {
            this.BuscarEstudiantesAsistentes('convocadosTodosAcompanamiento');
          } else if(this.publico =='S'){
            this.BuscarEstudiantesAsistentes('convocadosSolicitadosAcompanamiento');
          }
        }
      }
    )
  }

  BuscarEstudiantesAsistentes(tipo: string) {
    this.restService.get(tipo + '/' + this.spidem ).subscribe(
      data => {
        if (data.mensaje) {
          console.log('no existen resultado');
        } else {
          // this.listarTodosEstudiantes();
          this.listaEstudiantes = data;
          this.CrearModelo();
          //console.log(this.listaEstudiantes)
        }
      }
    )
  }

  CrearModelo(){
    for (let estudiante of this.listaEstudiantes) {
      //console.log(estudiante);
      this.estudianteM.push({
        codigoPlanificacion: this.idPlanificacion,
        codigoFormularios: 1,// codigo para la plificacion acompañamiento 
        idAsistentes: estudiante.id,
        ci: estudiante.cedula,
        estudiante: estudiante.nombres,
        pidm: estudiante.pidm,//codigo pidm del estudiante que va a recibir la tutoria
        email: estudiante.correo_INSTITUCIONAL,
        usuarioCrea: this.spidem,//codigo pidm  del tutor que crea la planificacion -- cambio a variable localstorage
        estado: 'A',
        fechaCrea: this.fechaActual,
        fechaTutoriaAsi: this.fechaActual
      })
    }
    console.log(this.estudianteM);
    this.CrearAsistencia();
  }

  
  CrearAsistencia() {
    this.restService.addData(this.estudianteM, 'crearAsistenciaLista').subscribe(
      data => {
        this.estudianteM =[]
      }
    )
  }
  
  
}







