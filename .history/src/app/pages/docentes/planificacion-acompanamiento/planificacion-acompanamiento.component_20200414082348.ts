import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import moment = require('moment');
import * as moment from 'moment';

//tslint:disable-next-line:no-duplicate-imports

// import { default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


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

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],

})

export class PlanificacionAcompanamientoComponent implements OnInit {
  @Input() registro:any
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

  campus1 = "10";
  dia1 = "SZARPGN_CAMPVA10";
  campus: any;
  dia: any;
  aulas: any;
  horario: any;
  hora_INICIO: any;
  hora_FIN: any;
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


  id: any
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
    this.listarHorario();

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
  listarCamp() {
    this.restService.get('getCampus').subscribe(
      data => {
        if (data) {
          console.log('datos', data)
          this.codigos = data;
          console.log("se listo" + this.codigos);
          console.log("se listo" + this.codigos.codigo);
        }
      }
    )
  }
  listarHorario() {

    this.restService.findDataByCampus("horario/", this.campus1,"/", this.dia).subscribe(
      data => {
        if (data) {
          console.log('datos2', data)
          this.aulas = data;
          console.log("se listo" + this.aulas);

        }
      }

    )
  }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];

  radioOptions: FormGroup;
  
  date = new FormControl(moment());

}







