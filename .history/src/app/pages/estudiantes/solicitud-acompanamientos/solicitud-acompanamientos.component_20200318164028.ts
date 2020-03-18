import { Component, OnInit, ɵConsole } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { formatDate } from "@angular/common";
import { TutoriaConstants } from 'app/constants/constants'
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitud-acompanamientos',
  templateUrl: './solicitud-acompanamientos.component.html',
  styleUrls: ['./solicitud-acompanamientos.component.scss', './solicitud-acompanamientos.component.css']
})


export class SolicitudAcompanamientosComponent implements OnInit {

 titleTutoria = TutoriaConstants.DATOSTUTORIA;
 titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  datosGuardar: any;
  ncr: any;

  cedula = "1725412306";
  ngOnInit() {
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
      codigoFormularios: "5",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "c",
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
