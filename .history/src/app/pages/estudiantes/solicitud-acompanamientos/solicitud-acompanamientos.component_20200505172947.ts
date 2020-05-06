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
import { FormGroup, Validators, FormBuilder, ValidationErrors,  ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-solicitud-acompanamientos',
  templateUrl: './solicitud-acompanamientos.component.html',
  styleUrls: ['./solicitud-acompanamientos.component.scss', './solicitud-acompanamientos.component.css']
})




export class SolicitudAcompanamientosComponent implements OnInit {
  estudiante:any;
  form: FormGroup;

 titleTutoria = TutoriaConstants.DATOSTUTORIA;
 titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  submitted= false;

  constructor(private router: Router, private fb: FormBuilder, private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public route: Router) {
    this.cedula= localStorage.getItem('cedula');
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

  }
  id: any

  tema: any = {
    tema: ""
  }

  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }
  
  
initForm() {this.form =  this.fb.group({
    'tema':  ['',  Validators.required]
    // 'observacionV':  ['',  Validators.required]

  });
}
mayus(){
  this.tema.tema.toUpperCase();
  // console.log(this.tema.tema.toUpperCase());
  
}
  guardar() {

    this.datosGuardar = {
      codigoFormularios: environment.codigoFormulariosSA,
      interacion: environment.interacion,
      fechaFormulario: formattedDate,
      tipoPersona: environment.tipoPersonaE,
      tipoTutoria: environment.tipoTutoriaA,
      spridenPidm: this.id,
      tema: this.tema.tema.toUpperCase(),
      observacion: this.observaciones.observacion,
      estado: environment.estado

    } 
     
    this.guardarTutorias();

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
  
    

   

  guardarTutorias() {

    this.restService.addData(this.datosGuardar, "crearPlanificacion").subscribe(
      data => {


        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema =[];
          this.observaciones.observacion= "";
          this.router.navigate(['/']);

        } else{

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
  persona:any =[];
      access() {
        this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
          this.persona = data[0];
          console.log('PER', this.persona);
          // this.router.navigate(['personal']);
          if (this.persona === undefined) {
            console.log('tiene acceso')
          } else {
            // //console.log('JSON', JSON.stringify(this.aux));
            if (data[0] == undefined) {
              //this.router.navigate(['/error']);
              console.log('tiene acceso')

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

  
  getdatosPer(){
    this.service.getUsuarioCompleto(this.cedula).subscribe(
      data => {
       this.estudiante = data;
        // console.log(this.Datosp);
        //this.propagar.emit(this.Datosp);
       // console.log( this.estudiante)
      }
    )
  }
  

}
