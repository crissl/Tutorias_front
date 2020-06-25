import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../confirmacion-asistencia.component';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Envio } from 'app/models/Envio';
import { Correo } from 'app/models/correo';
const format = 'yyyy-MM-dd';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss', './confirmar.component.css']


})
export class ConfirmarComponent implements OnInit {
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  estudiante:any;
  datosDocente: any;

  constructor(private router: Router, private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.cedula= localStorage.getItem('cedula');
      this.estudiante = localStorage.getItem('nombreCompleto');
     }
  pipe = new DatePipe('en-US');
  now = Date.now();
  fechaActual = this.pipe.transform(this.now, 'yyyy-MM-dd');

  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  datosGuardar: any;
  ncr: any;
  fecha = Date.now();
  // spidem = 29829;
  spidem;
  // cedula = "1724079445";
  cedula;
  confirmar: string;
  recibioT: String;

  ngOnInit() {
    // this.cedula= localStorage.getItem('cedula');
    this.spidem= localStorage.getItem('pidm');


    console.log(this.data)
    //this.traersolicitud();

  }
  id: any
  procesaPropagar(data) {
    this.id = data[0].spidem
    //console.log(data[0].pidm)
  }
  comentario: any = {
    comentario: ""
  }
  confirmacion: any;
  observacion: any = {
    observacion: ""

  }
  listarDatosDocente() {
    this.restService.findDataById("datosDocente/", this.spidem).subscribe(
      data => {
        this.datosDocente = data
        console.log("docente",this.datosDocente)
      }
    )
  }


  mayus(){
    this.comentario.comentario.toUpperCase();
    this.observacion.observacion.toUpperCase();

    // console.log(this.tema.tema.toUpperCase());
    
  }


  actualizar() {
    
  
      this.data.asistencia.confirmacion = this.recibioT;
      this.data.asistencia.fechaModica = Date.now();
      this.data.asistencia.estado = environment.estadoC;
      // this.data.asistencia.codigoFormularios = environment.codigoFormulariosCA;
      this.data.asistencia.comentario = this.comentario.comentario.toUpperCase();
      this.data.asistencia.observacionEst = this.observacion.observacion.toUpperCase();
      //console.log(this.data.asistencia)
      this.ConfirmarAsistencia();
  }

 ConfirmarAsistencia(){
   this.data.asistencia.fechaRegistroAsi = this.fechaActual;
   this.data.asistencia.usuarioModica = this.spidem;
   this.restService.UpData(this.data.asistencia, "actualizarAsistencia").subscribe(
      data => {
        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.dialogRef.close(data);
          this.router.navigate(['/']);


        }else{
          this.toast.error("No se creo");
          this.dialogRef.close();
        }
      }
    )
 }


  listarNrc() {
    this.restService.findData(this.id).subscribe(
      data => {

      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public envios: Envio;
  public correo: any[]=[];

  enviarEmail() {
    this.correo.push(
      {
        nombre:this.estudiante,
        correo:"estudiante@yavirx.edu.ec"
      }
    )

    this.correo.push(
      {
        nombre:"ds",
        correo:"docente@yavirac.edu.ec"
      }
    )


    // for(this.estudiante; i.leghy){

    //   this.correo.push(
    //     {
    //       nombre:estudiante.nombre,
    //       correo:this.estudiante.correo
    //     }
    //   )

    // }
    
    
    this.envios = {
      asunto: "Tiene una Solicitud de Tutoria Pendiente ",
      mensaje: "<b>Se ha confirmado  exitosamente  <b> <br> "
     + "que  el estudiante:" + this.estudiante + "" "el dia "+ Date.now +  " con el tema " + this.datosGuardar.tema + " y la observación " + this.datosGuardar.observacion + ". Gracias por su atención.",
      sistema: "TUTORIAS",
      email: this.correo

    }
   
    console.log(this.envios);


    //   this.restService.UpData().subscribe(
    //     data => {

    //     }
    //   )
    // }
  

}

}
