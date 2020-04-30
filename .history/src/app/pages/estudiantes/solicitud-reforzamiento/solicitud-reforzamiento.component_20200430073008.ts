import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-solicitud-reforzamiento',
  templateUrl: './solicitud-reforzamiento.component.html',
  styleUrls: ['./solicitud-reforzamiento.component.scss','./solicitud-reforzamiento.component.css']
})
export class SolicitudReforzamientoComponent implements OnInit {
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  form: FormGroup;
  submitted= false;
  constructor(private fb: FormBuilder, private restService: RestService, public toast: ToastrService,private router: Router) { }

  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any = {
    id: ""
  }
  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  nivel: any;

  nrcs: any
  datosGuardar: any;
  spidem = 334571;
  cedula = "1725412306";
  ngOnInit() {
        // this.spidem= localStorage.getItem('pidm');
    this.listarNrc();
    this.initForm();

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
  initForm() {this.form =  this.fb.group({
    'tema':  ['',  Validators.required]
    // 'selectNrc':  ['',  Validators.required]
    // 'observacion':  ['',  Validators.required]


  });
}

  
  guardar(nrc: number, codigo, asignatura, campus, periodo, nivel) {
    this.nrc = nrc;
    this.codigo = codigo;
    this.asignatura = asignatura;
    this.campus = campus;
    this.periodo = periodo;
    this.nivel = nivel; 

  }



  listarNrc() {
    this.restService.findDataById("nrcSolicitud/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        //console.log(this.nrcs)
      }
    )
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    // display form values on success
    this.guardarTutoria();
}
  get f() { return this.form.controls; }
  guardarTutoria() {

    this.datosGuardar = {
      codigoFormularios: "2",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "REFORZAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      nrc: this.nrc,
      periodo: this.periodo,
      nivel: this.nivel,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo
    }
    this.restService.addData(this.datosGuardar,"crearPlanificacion").subscribe(
      data => {

        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion= "";
          this.nrcs = []
          this.router.navigate(['/listaAlumnosAcompanamiento']);
        }else{
          this.toast.error("No se creo");
        }
        
      }
    )
  }




}
