import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formatDate, DatePipe } from "@angular/common";
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { AppDateAdapter, APP_DATE_FORMATS } from 'app/pages/Formatos/format-datepicker';

// const format = 'dd/MM/yyyy';
// const myDate = Date.now();
// const locale = 'en-US';
// const formattedDate = formatDate(myDate, format, locale);


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
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }

  ],

})
export class PlanificacionReforzamientoComponent implements OnInit {

  pipe = new DatePipe('en-US');
  now = Date.now();
  fechaActual = this.pipe.transform(this.now, 'yyyy-MM-dd');

  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
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
  publico:string;
  campus1 = "10";
  dia1 = "SZARPGN_CAMPVA10";
  hora_INICIO = "0715";
  hora_FIN = "0915";
  horaInicioEscogido = "1200";
  horaFinEscogido = "1400";
  dia: any;
  aulas: any;
  aulas2: any;
  horario: any;
  horariosSelected: any;
  fechatutoria:any
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
  id: any
  procesaPropagar(data) {
    this.id = data[0].pidm
    //console.log(data[0].pidm)
  }
  tema: any = {
    tema: ""
  }
  public observaciones: any


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
      codigoFormularios: "1",
      interacion: "0",
      fechaFormulario: this.fechaActual,
      tipoPersona: "DOCENTE",
      tipoTutoria: "REFORZAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones,
      estado: "A",
      nrc: this.nrcSeleccionado,
      periodo: this.periodoSeleccionado,
      inicio: this.inicio,
      fin: this.fin,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo,
      horarioOpcion: "sds",//horario,
      publico:this.publico,
      fechaCrea: this.fechaActual,
      fechaTutoria:this.fechatutoria,
      usuariocrea:this.spidem
    }
    console.log(this.datosGuardar);
    //this.guardarPlanificaR();
    //this.buscartodos();

  }


  guardarPlanificaR(){
    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {

        if (data) {
          this.toast.success(data.mensaje, "El Formulario se actualizo", this.options);
          this.tema = [];
          //this.observaciones.observacion = "";
          this.nrcs = []
        } else {

          this.toast.error("No se creo");
        }

      }
    )

  }

  listarHorario() {
    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus1, "/", this.dia1, "/", this.hora_INICIO, "/", this.hora_FIN).subscribe(
      data => {
        if (data) {
          console.log('datos2', data)
          this.aulas = data;
          console.log("se listo" , this.aulas);

        }
      }

    )
  }
  listarHorarioSelecto() {

    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus1, "/", this.dia1, "/", this.horaInicioEscogido, "/", this.horaFinEscogido).subscribe(
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
  typeExpress: string[] = ['Si', 'No'];
  radioOptions: FormGroup;

  expressType2: string;
  typeExpress2: string[] = ['AULA', 'LUGAR'];
  radioOptions2: FormGroup;

  date = new FormControl(moment());

  nrcSeleccionado:any
  periodoSeleccionado:any;


  nrcSeleccionadoOption(nrc:any){
    this.nrcSeleccionado = nrc.nrc;
    this.periodoSeleccionado = nrc.periodo
    //this.codigo = nrc.codigo;
    this.asignatura = nrc.asignatura;
    this.campus = nrc.campus;
    this.inicio = nrc.inicio;
    this.fin = nrc.fin;
    console.log(this.campus,this.inicio,this.fin);
  }


  
  Todos: any;
  buscartodos() {
    this.restService.get('convocadosTodos/' + this.nrcSeleccionado + '/'+ this.periodoSeleccionado).subscribe(
      data => {
        this.Todos = data;
        console.log(data);
        if(data.mensaje){
          console.log('no existen resultado');
        }else{
         // this.listarTodosEstudiantes();
        }
      }
    )

  }
Solicitado:any;

  buscaSolicitado() {
    this.restService.get('/convocadosSolicitadosAcompanamiento/' + this.spidem).subscribe(
      data => {
        this.Solicitado= data;
        if(data.mensaje){
          console.log('no hay estudiantes para este pidm')
        }else{
         // this.listarSolitadoEstudiante();
        }
      }
    )
  }

  FechaDeTutoria(event: any) {

    const myFormattedDate = this.pipe.transform(event.value, 'yyyy-MM-dd')
    this.fechatutoria = myFormattedDate;

    //const dob = stringified.substring(1, 11);
    // this.applicant.contact[0].dob = dob;
    //console.log(dob)
  }


  // CrearAsistenciaTodos() {
  //   this.restService.addData(this.estudianteM, 'convocadosTodos').subscribe(
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
  //   this.restService.addData(,'convocadosMeno14').subscribe(
  //     data => {

  //     }
  //   )
  // }

}
