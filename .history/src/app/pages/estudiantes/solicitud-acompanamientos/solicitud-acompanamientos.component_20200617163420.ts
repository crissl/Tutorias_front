import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/services/rest.service'
import { formatDate } from "@angular/common";
import { TutoriaConstants } from 'app/constants/constants'
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Envio } from 'app/models/Envio';
import { Correo } from 'app/models/correo';


@Component({
  selector: 'app-solicitud-acompanamientos',
  templateUrl: './solicitud-acompanamientos.component.html',
  styleUrls: ['./solicitud-acompanamientos.component.scss', './solicitud-acompanamientos.component.css']
})

export class SolicitudAcompanamientosComponent implements OnInit {
  estudiante: any;
  form: FormGroup;

  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  submitted = false;
  spidem;

  constructor(private router: Router, private fb: FormBuilder, private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public route: Router) {
    this.cedula = localStorage.getItem('cedula');
    this.estudiante = localStorage.getItem('nombreCompleto');

  }

  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  datosGuardar: any;
  ncr: any;

  // cedula = "1725412306";
  cedula;

  ngOnInit() {
    this.access();
    this.initForm();
    this.spidem = localStorage.getItem('pidm');

  }
  id: any

  tema: any = {
    tema: ""
  }

  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }


  initForm() {
    this.form = this.fb.group({
      'tema': ['', Validators.required]
      // 'observacionV':  ['',  Validators.required]

    });
  }
  mayus() {
    this.tema.tema.toUpperCase();
    this.observaciones.observacion.toUpperCase();
  }
  guardar() {

    this.datosGuardar = {
      codigoFormularios: environment.codigoFormulariosSA,
      interacion: environment.interacion,
      fechaFormulario: formattedDate,
      tipoPersona: environment.tipoPersonaE,
      tipoTutoria: environment.tipoTutoriaA,
      spridenPidm: this.spidem,
      tema: this.tema.tema.toUpperCase(),
      observacion: this.observaciones.observacion.toUpperCase(),
      estado: environment.estado,
      usuaCrea: this.spidem,
      fechaCrea: Date.now()


    }

    //this.guardarTutorias();
    this.enviarEmail();
  }

  guardarTutorias() {

    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {
        if (data) {
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion = "";
          this.router.navigate(['/']);
        } else {
          this.toast.error("No se creo");
        }
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
    this.guardar();
  }
  get f() { return this.form.controls; }

  listarNrc() {
    this.restService.findData(this.id).subscribe(
      () => {

      }
    )
  }
  persona: any = [];
  access() {
    this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
      this.persona = data[0];
      // this.router.navigate(['personal']);
      if (this.persona === undefined) {
        // console.log('tiene acceso')
      } else {
        // //console.log('JSON', JSON.stringify(this.aux));
        if (data[0] == undefined) {
          //this.router.navigate(['/error']);
          // console.log('tiene acceso')

        }
        if (this.persona.tipo_EMPLEADO == ('DO')) {
          this.route.navigateByUrl('/error');

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


  getdatosPer() {
    this.service.getUsuarioCompleto(this.cedula).subscribe(
      data => {
        if (data)
          this.estudiante = data;
      }
    )
  }

  public envios: Envio;
  public correo: Correo[];

  enviarEmail() {

    this.envios = {
      asunto: "Tiene una Solicitud de Tutoria Pendiente ",
      mensaje: "<b>La solicitud fue procesa el <b> <br>  "
        + Date.now + " el estudiante: " + this.estudiante + "para el tema" + this.datosGuardar.tema,
      sistema: "TUTORIAS",
      email: this.correo

    }
    this.correos.push
    console.log(this.envios);


    //   this.restService.UpData().subscribe(
    //     data => {

    //     }
    //   )
    // }


  }
}
