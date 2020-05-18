import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/services/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formatDate, DatePipe } from "@angular/common";
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { AppDateAdapter, APP_DATE_FORMATS } from 'app/pages/Formatos/format-datepicker';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
interface HoraI {
  value: string;
  viewValue: string;
}
interface HoraF {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-planificacion-reforzamiento',
  templateUrl: './planificacion-reforzamiento.component.html',
  styleUrls: ['./planificacion-reforzamiento.component.scss'],
  providers: [
   
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
  estudiante: any;
  pipe = new DatePipe('en-US');
  now = Date.now();
  fechaActual = this.pipe.transform(this.now, 'yyyy-MM-dd');

  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  constructor(private router: Router, private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public route: Router) {
    this.cedula= localStorage.getItem('cedula');
    this.estudiante = localStorage.getItem('nombreCompleto');
   }
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any = {
    id: ""
  }
  idPlanificacion: any;
  datosGuardar: any;
  ncr: any;
  nrcs: any;
  nrcs2: any;
  nrcs3: any;
  // spidem = 14159;
  spidem;

  // cedula = "1725412306";
  cedula;
  publico: string;
  campus1 = "10";
  dia1 = "SZARPGN_CAMPVA10";
  
    horaInicioEscogido: any;
  horaFinEscogido:any;
  //horaInicioEscogido = "1200";
  //horaFinEscogido = "1400";
  dia: any;
  aulas: any;
  aulas2: any;
  horario: any;
  horariosSelected: any;
  fechatutoria: any
  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  inicio: any;
  fin: any;
  codigoAsignatura: any;
  aula: any;
  nivel: any;
  horaIN: any
  horaIF: any
  NoLugar: any;
  SiLugar:any;
  siLugarInicio:any;
  siLugarFin:any;

  ngOnInit() {
    this.access();

    this.spidem= localStorage.getItem('pidm');
    // this.cedula= localStorage.getItem('cedula');


    this.listarNrc();
    this.listarNrc2();
    //this.listarHorario();
    this.listarHorarioSelecto();
    this.listarNrcLugar();

  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
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


  nrcNo:any

  listarNrc() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs = data;
        this.nrcNo =data;
        // console.log(this.nrcs)
      }
    )
  }
  listarNrc2() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs2 = data
        // console.log(this.nrcs2)
      }
    )
  }
  listarNrcLugar() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs3 = data
        // console.log(this.nrcs3)
      }
    )
  }
  mayus(){
    this.tema.tema.toUpperCase();
    this.observaciones.toUpperCase();
    // console.log(this.tema.tema.toUpperCase());
    
  }
  guardarTutoria() {
    if(this.expressType2 ==='LUGAR'){
      this.aula = this.NoLugar
      this.nivel = undefined;
    }

    if(this.expressType1 ==='LUGAR' && this.expressType==='Si'){
      this.aula = this.SiLugar;
      //this.inicio = this.inicio;
      //this.fin = this.fin;
     
      this.nivel=undefined;
    
    }
    

    this.datosGuardar = {
      codigoFormularios: environment.codigoFormulariosPR,
      interacion: environment.interacion,
      fechaFormulario: this.fechaActual,
      tipoPersona: environment.tipoPersonaD,
      tipoTutoria: environment.tipoTutoriaR,
      spridenPidm: this.spidem,
      tema: this.tema.tema.toUpperCase(),
      observacion: this.observaciones.toUpperCase(),
      estado: environment.estado,
      nrc: this.nrcSeleccionado,
      periodo: this.periodoSeleccionado,
      horaInicio: this.inicio,
      horaFin: this.fin,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigoAsignatura,
      horarioOpcion: this.expressType.substring(0, 1),//horario,
      publico: this.publico,
      fechaCrea: this.fechaActual,
      fechaTutoria: this.fechatutoria,
      usuaCrea: this.spidem,
      aula: this.aula,
      nivel: this.nivel
    }
    // console.log(this.datosGuardar);
    this.guardarPlanificaR();
    

  }


  guardarPlanificaR() {
    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {
        if (data) {
          this.toast.success(data.mensaje, "El Formulario se actualizo", this.options);
          //this.tema = [];
          //this.observaciones.observacion = "";
         // this.nrcs = [];
          this.BuscarIdPlanif();
          this.router.navigate(['/']);

          
        } else {

          this.toast.error("No se creo");
          this.router.navigate(['/']);

        }

      }
    )

  }

  listarHorario() {
    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus, "/", this.dia1, "/", this.inicio, "/", this.fin).subscribe(
      data => {
        if (data) {
          // console.log('datos2', data)
          this.aulas = data;
        }
      }

    )
  }

  horarioInNo:any
  horarioFiNo:any
  listarHorarioSelecto() {
    this.restService.findDataByHorarioReforzamiento("horarioPlanificacion/", this.campus1, "/", this.dia1, "/", this.horaInicioEscogido, "/", this.horaFinEscogido).subscribe(
      data => {
        if (data) {
          // console.log('datos2', data)
          this.aulas2 = data;
          
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

  expressType1: string;
  typeExpress1: string[] = ['AULA', 'LUGAR'];
  radioOptions1: FormGroup;

  date = new FormControl(moment());

  nrcSeleccionado: any
  periodoSeleccionado: any;
  SiLugarHorarioI:any;
  NoLugarHorarioF:any;


  nrcSeleccionadoOption(nrc: any) {
    this.nrcSeleccionado = nrc.nrc;
    this.periodoSeleccionado = nrc.periodo
    //this.codigo = nrc.codigo;
    this.asignatura = nrc.asignatura;
    this.campus = nrc.campus;
    this.inicio = nrc.inicio;
    this.fin = nrc.fin;
    this.codigoAsignatura = nrc.codigo_ASIGNATURA;
    this.SiLugarHorarioI = (this.inicio).slice(0, 2) + ":" + (this.inicio).slice(2);
    this.NoLugarHorarioF = (this.fin).slice(0, 2) + ":" + (this.fin).slice(2);
    // console.log(this.campus, this.inicio, this.fin);
    this.listarHorario();
  }

  nrcSelecionadoNoHorario(nrc){
    this.campus = nrc.campus
    this.inicio = nrc.inicio;
    this.fin = nrc.fin;
    this.listarHorario
  }



  guardarAsignaturaNo(aula){
    // console.log(aula)
    this.aula = aula.aula;
    this.nivel = aula.nivel;
    this.inicio =aula.hora_INICIO;
    this.fin =aula.hora_FIN;
    this.horarioInNo = (aula.hora_INICIO).slice(0, 2) + ":" + (aula.hora_INICIO).slice(2);
     this.horarioFiNo = (aula.hora_FIN).slice(0, 2) + ":" + (aula.hora_FIN).slice(2);

  }



  Todos: any;

  FechaDeTutoria(event: any) {

    const myFormattedDate = this.pipe.transform(event.value, 'yyyy-MM-dd')
    this.fechatutoria = myFormattedDate;

    //const dob = stringified.substring(1, 11);
    // this.applicant.contact[0].dob = dob;
    //console.log(dob)
  }
  horaFormatoI: any;
  horaFormatoF: any;
  horaInicio:any;
  horaFin:any;
  guardarAula(aula) {
    console.log(aula)
    this.aula = aula.aula;
    this.nivel = aula.nivel;
    this.horaInicio = aula.hora_INICIO;
    this.horaFin = aula.hora_FIN;
    // console.log(this.horaInicio);
     //this.horaFormatoI = (this.horaInicio).slice(0, 1); 
     //this.horaFormatoF = (this.horaFin).slice(0, 1);
     this.horaFormatoI = (this.horaInicio).slice(0, 2) + ":" + (this.horaInicio).slice(2);
     this.horaFormatoF = (this.horaFin).slice(0, 2) + ":" + (this.horaFin).slice(2);
    //  console.log(this.horaFormatoF,this.horaFormatoI)
  }


  guardarAulaNo(aula){
    // console.log(aula);
    this.campus1 = aula.campus;
    this.horaInicioEscogido = this.horaIN;
    this.horaFinEscogido =this.horaIF;
     this.campus = aula.campus;
     this.periodoSeleccionado = aula.periodo;
     this.codigoAsignatura =aula.codigo_ASIGNATURA;
     this.nrcSeleccionado = aula.nrc;
     this.asignatura = aula.asignatura;
    // this.nrc = aula.nrc;
    // this.codigoAsignatura = aula.codigo_ASIGNATURA;
    this.listarHorarioSelecto();
  }


  BuscarIdPlanif() {
    this.restService.getData('ultimoPlanif').subscribe(
      data => {
        if (data) {
          this.idPlanificacion = data;
          if (this.publico == 'T') {
            this.BuscarEstudiantesAsistentes('convocadosTodos');
          } else if (this.publico == 'M') {
            this.BuscarEstudiantesAsistentes('convocadosMeno14');
          } else if (this.publico == 'S') {
            this.BuscarEstudiantesAsistentes('convocadosSolicitados');
          }
        }
      }
    )

  }

  listaEstudiantes: any;

  BuscarEstudiantesAsistentes(tipo: string) {
    this.restService.get(tipo + '/' + this.nrcSeleccionado + '/' + this.periodoSeleccionado).subscribe(
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

  public estudianteM: any[] = []
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
    // console.log(this.estudianteM);
    this.CrearAsistencia();
  }

  CrearAsistencia() {
    
    this.restService.addData(this.estudianteM, 'crearAsistenciaLista').subscribe(
      data => {
        this.estudianteM =[]
      }
    )
  }

  
  SelectNrcnrLugar(nrc){
    // console.log(nrc)
    this.campus = nrc.campus;
    this.asignatura = nrc.asignatura;
    this.codigoAsignatura = nrc.codigo_ASIGNATURA;
    this.periodoSeleccionado = nrc.periodo;
    this.nrcSeleccionado = nrc.nrc
    //this.aula = this.NoLugar
    this.inicio = this.horaIN;
    this.fin = this.horaIF;
  }
  persona:any =[];
  access() {
    this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
      this.persona = data[0];
      console.log('PER', this.persona);
      // this.router.navigate(['personal']);
      if (this.persona === undefined) {
        this.route.navigateByUrl('/error');
      } else {
        // //console.log('JSON', JSON.stringify(this.aux));
        if (data[0] == undefined) {
          //this.router.navigate(['/error']);
          this.route.navigateByUrl('/error');
        }
        if (this.persona.tipo_EMPLEADO == ('DO')) {
         // this.router.navigate(['/error']);
        
          // console.log('si puedes entrar')
        }

      }
    }, (err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 500) {
          // //console.log('ERROR');
          this.route.navigate(['/']);
        }
      }
    }
    )

  }

}
