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
  spidem = 29829;

  // cedula = "1724079445";
  cedula;
  confirmar: string;
  recibioT: String;

  ngOnInit() {
    // this.cedula= localStorage.getItem('cedula');
    // this.spidem= localStorage.getItem('pidm');

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
      this.data.asistencia.comentario = this.comentario.comentario;
      this.data.asistencia.observacionEst = this.observacion.observacion;
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


}


