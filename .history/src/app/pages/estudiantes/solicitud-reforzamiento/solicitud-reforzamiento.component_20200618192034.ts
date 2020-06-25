import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { RestService } from 'app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Envio } from 'app/models/Envio';
import { Correo } from 'app/models/correo';
const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-solicitud-reforzamiento',
  templateUrl: './solicitud-reforzamiento.component.html',
  styleUrls: ['./solicitud-reforzamiento.component.scss', './solicitud-reforzamiento.component.css']
})
export class SolicitudReforzamientoComponent implements OnInit {
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  estudiante:any;
  form: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private restService: RestService, public toast: ToastrService, private router: Router, public route: Router) { 
    this.cedula= localStorage.getItem('cedula');
    this.estudiante = localStorage.getItem('nombreCompleto');
  }
 
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any;
   
  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  nivel: any;

  nrcs: any
  datosGuardar: any;
  // spidem = 334571;
  spidem;
  // cedula = "1725412306";
  cedula;
  ngOnInit() {
    this.access();

    this.spidem = localStorage.getItem('pidm');
    this.cedula = localStorage.getItem('cedula');
    console.log('pidem',this.spidem);
    this.listarNrc();
    this.initForm();

  }
  id;
  procesaPropagar(data) {
    this.id = data[0].spidem
    //console.log(data[0].pidm)
  }
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
        // console.log(this.nrcs)
      }
    )
  }
  listarDatosDocente() {
    this.restService.findDataById("datosDocente/", this.spidem).subscribe(
      data => {
        this.datosDocente = data
        console.log("docente",this.datosDocente)
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
    // this.guardarTutoria();
    this.enviarEmail();
  }

  mayus(){
    this.tema.tema.toUpperCase();
    this.observaciones.observacion.toUpperCase();
    // console.log(this.tema.tema.toUpperCase());
    
  }
  get f() { return this.form.controls; }
  guardarTutoria() {

    this.datosGuardar = {
      codigoFormularios: environment.codigoFormulariosSR,
      interacion: environment.interacion,
      fechaFormulario: formattedDate,
      tipoPersona: environment.tipoPersonaE,
      tipoTutoria: environment.tipoTutoriaR,
      spridenPidm: this.spidem,
      tema: this.tema.tema.toUpperCase(),
      observacion: this.observaciones.observacion.toUpperCase(),
      estado: environment.estado,
      nrc: this.nrc,
      periodo: this.periodo,
      nivel: this.nivel,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo,
      usuaCrea: this.spidem,
      fechaCrea: Date.now()


    }
    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {

        if (data) {
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion = "";
          this.nrcs = []
          this.router.navigate(['/']);
        } else {
          this.toast.error("No se creo");
        }

      }
    )
  }
  persona: any = [];
  access() {
    this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
      this.persona = data[0];
      // console.log('PER', this.persona);
      // this.router.navigate(['personal']);
      if (this.persona === undefined) {
        console.log('tiene acceso')
      } else {
        // //console.log('JSON', JSON.stringify(this.aux));
        if (data[0] == undefined) {
          //this.router.navigate(['/error']);
          // console.log('tiene acceso')

        }
        if (this.persona.tipo_EMPLEADO == ('DO')) {
          // this.router.navigate(['/error']);

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
      mensaje: "<b> La solicitud fue procesada y llenada exitosamente el <b> <br>  "
        + Date.now + ", por  el estudiante: " + this.estudiante + " con el tema " + this.datosGuardar.tema + " y la observación " + this.datosGuardar.observacion + ". Gracias por su atención.",
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
