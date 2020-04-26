import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../confirmacion-asistencia.component';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
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

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    options: any = {
      toastLife: 3000,
      dismiss: "auto",
      showCloseButton: true
    };
    datosGuardar: any;
    ncr: any;
    fecha= Date.now();
    cedula = "1725412306";
    confirmar: string;

  ngOnInit() {
  //  console.log(this.data)
  this.traersolicitud();
  }
  id: any
  procesaPropagar(data) {
    this.id = data[0].pidm
    //console.log(data[0].pidm)
  }
  comentario: any = {
    comentario: ""
  }
  confirmacion:any;
observacion


  


  actualizar() {
    this.datosGuardar = {
      codigoFormularios: "6",
      interacion: "0",
      fechaRegistroAsi: formattedDate,
      spridenPidm: this.id,
      confirmacion: this.confirmar,
      comentario: this.comentario.comentario,
      observacionAsi: this.confirmacion.observacion,
      estado: "A"

    }
    this.actualizarTutorias();
  }

  actualizarTutorias() {

    this.restService.UpData(this.datosGuardar, "actualizarAsistencia").subscribe(
      data => {
        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.confirmar= "";
          this.comentario =[];
          this.confirmacion.observacion= "";

        }else{

          this.toast.error("No se creo");
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
  traersolicitud(){
    this.restService.get('planificacionpidm'+"/"+this.data.idplanif+"/"+this.data.pidm).subscribe(
      data =>{
        console.log(data);
        this.confirmacion = data;
      }
    )
  }

}

