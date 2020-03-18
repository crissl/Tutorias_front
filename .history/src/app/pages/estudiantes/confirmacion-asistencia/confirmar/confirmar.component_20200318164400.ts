import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../confirmacion-asistencia.component';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss', './confirmar.component.css'],
  

})
export class ConfirmarComponent implements OnInit {
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    options: any = {
      toastLife: 3000,
      dismiss: "auto",
      showCloseButton: true
    };
    datosGuardar: any;
    ncr: any;
  
    cedula = "1725412306";
  ngOnInit() {
    // console.log(this.data)
  }
  id: any
  procesaPropagar(data) {
    this.id = data[0].pidm
    //console.log(data[0].pidm)
  }
  tema: any = {
    tema: ""
  }




  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }


  guardar() {
    this.datosGuardar = {
      codigoFormularios: "56",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "CONFIRMACION",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A"

    }
    this.guardarTutorias();
  }

  guardarTutorias() {

    this.restService.addData(this.datosGuardar, "segu").subscribe(
      data => {
        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema =[];
          this.observaciones.observacion= "";
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

}


