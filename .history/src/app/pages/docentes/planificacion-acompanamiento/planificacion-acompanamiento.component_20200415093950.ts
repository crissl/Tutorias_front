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
  spidem = 357192;
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
    showCloseButton: false
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
    this.datosGuardar = {
      codigoFormularios: "3",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "PLANIFICACION ACOMPANAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      publico: "T",
      aula: this.aula.aula,
      fechaTutoria: MAT_DATE_FORMATS,
      horaInicio: this.hora_INICIO.hora_INICIO,
      horaFin: this.hora_FIN.hora_FIN,
      fechaCrea: MAT_MOMENT_DATE_FORMATS,
      usuaCrea: this.spidem

    }
    this.guardarTutorias();
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

  horaInicio:any;
  horaFin:any;
  listarHorario(codigo: number,horarioInicio:any,horarioFin:any) {
    this.restService.get('horario/' + codigo + '/' + this.dia).subscribe(
      data => {
        this.aulas = data;
        //this.horaInicio = data.hora_INICIO;

        
      }
    )
  }
 horaFormatoI:any;
 horaFormatoF:any;
  selectHour(aula: any){
    this.horaInicio = aula.hora_INICIO;
    this.horaFin = aula.hora_FIN
    console.log(this.horaInicio)
    this.horaFormatoI = (this.horaInicio).slice(0,2)+ ":" +(this.horaInicio).slice(2);
    this.horaFormatoF = (this.horaFin).slice(0,2)+ ":" +(this.horaFin).slice(2);
    
  }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];

  radioOptions: FormGroup;

  date = new FormControl(moment());

}







