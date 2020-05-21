import { Component, OnInit, Inject } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe, NumberFormatStyle } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  titleLista = TutoriaConstants.LISTAESTUDIANTE;

  constructor(private router: Router, private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  pipe = new DatePipe('en-US');
  now = Date.now();
  fechaActual = this.pipe.transform(this.now, 'yyyy-MM-dd');

  alumno: any
  // spidem = 14159;
  spidem;
  // codigoPlanificacion = 53;
  codigoPlanificacion;
  idAsistentes: any;
  estudiante: any;
  email: any;
  cedula1: any;
  estado: any;
  registrar: string;

  datosGuardar: any;
  ncr: any;
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };


  // cedula = "1725412306";
  cedula;
  ngOnInit() {
    this.spidem= localStorage.getItem('pidm');

    // this.cedula= localStorage.getItem('cedula');

    this.listarFormuConfirma()
    // console.log(this.data);
    this.traerPlanificacion();
  }

  id: any
  procesaPropagar(data) {
    this.id = data[0].spidem
    //console.log(data[0].pidm)
  }
  tema: any = {
    tema: ""
  }

  observacion: any = {
    observacion: ""

  }

  listaAsistentes(codigoPlanificacion: number, idAsistentes, estudiante, email, cedula1, estado) {
    this.codigoPlanificacion = codigoPlanificacion;
    this.idAsistentes = idAsistentes;
    this.estudiante = estudiante;
    this.email = email;
    this.cedula = cedula1;
    this.estado = estado;
  }

  listarFormuConfirma() {
    this.restService.findDataById("registroAsistencia/", this.data.planificacion.codigo_UZTPLANIF).subscribe(
      data => {
        this.alumno = data
        // console.log(this.alumno)
      }
    )
  }

  listarNrc() {
    this.restService.findData(this.id).subscribe(
      data => {

      }
    )
  }
  

  actualizar() {
    //this.data.asistentes.usuarioModica = this.fechaActual;
    console.log(this.data.asistentes);
    for (let numero of this.data.asistentes){
      numero.usuarioModica = this.spidem;
      numero.fechaModica = Date.now();
      numero.observacionAsi = this.observacion.observacion.toUpperCase()
    }
    console.log(this.data.asistentes);
    this.restService.UpData(this.data.asistentes,'editarAsistenciaLista').subscribe(
      data =>{
        // console.log(data);
        this.actualizarPlanificacion();
      }
    )
  }
  fechaFormato:any;
  fechaInicio:any;
  fechaFin:any;

  planificacion:any;
  traerPlanificacion(){
    this.restService.get('getPlanificacion/'+this.data.planificacion.codigo_UZTPLANIF).subscribe(
      data =>{
        
        this.planificacion = data;
         this.fechaInicio = (data.horaInicio).slice(0, 2) + ":" + (data.horaInicio).slice(2);
         this.fechaFin = (data.horaFin).slice(0, 2) + ":" + (data.horaFin).slice(2);
        this.fechaFormato = this.pipe.transform(data.fechaTutoria, 'yyyy-MM-dd');
      }
    )
  }
  mayus(){
    this.observacion.observacion.toUpperCase();

    // console.log(this.tema.tema.toUpperCase());
    
  }

  actualizarPlanificacion(){
    this.planificacion.fechaModif = Date.now();
    this.planificacion.usuaModif = this.spidem;
    this.planificacion.estado = environment.estadoC;
    // this.planificacion.codigoFormularios= environment.codigoFormulariosRA;
    this.restService.UpData(this.planificacion,'actualizarPlanificacion').subscribe(
      data =>{
        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          // console.log(data);
           this.dialogRef.close(data);
           this.router.navigate(['/']);
          }else{
            this.toast.error("No se creo");
            this.dialogRef.close();
          }
      }
    )

  }
  onNoClick(){
    this.dialogRef.close();

  }


}