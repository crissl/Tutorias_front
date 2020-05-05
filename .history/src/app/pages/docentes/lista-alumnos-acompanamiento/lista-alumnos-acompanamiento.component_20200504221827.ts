import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { RestService } from 'app/service/rest.service';
import { PersonalDataService } from 'app/services/personal-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos-acompanamiento',
  templateUrl: './lista-alumnos-acompanamiento.component.html',
  styleUrls: ['./lista-alumnos-acompanamiento.component.scss']
})
export class ListaAlumnosAcompanamientoComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;


  constructor(private service: PersonalDataService, private restService: RestService,public route: Router) { }
  // cedula = "1710802925";
  id: any
  alumno: any
  correoPersonal: any
  correoInstitusional: any
  celular: any
  // spidem = 14159 ;
  cedula;
  spidem;
  procesaPropagar(data) {
    this.id = data[0].pidm
  }

  ngOnInit() {
    this.access();

    this.spidem= localStorage.getItem('pidm');
    this.cedula= localStorage.getItem('cedula');
    this.listarAlumnos();

  }

  listAlumnos(id: number, correoPersonal, correoInstitusional,cedula, celular) {
    this.id = id;
    this.correoPersonal = correoPersonal;
    this.correoInstitusional = correoInstitusional;
    this.cedula = cedula;
    this.celular = celular;
  

  }

    listarAlumnos() {
      this.restService.findDataById("AlumnosAcompanamiento/", this.spidem).subscribe(
        data => {
          this.alumno = data
          console.log(this.alumno)
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
          this.route.navigateByUrl('/');
        } else {
          // //console.log('JSON', JSON.stringify(this.aux));
          if (data[0] == undefined) {
            //this.router.navigate(['/error']);
            this.route.navigateByUrl('/');
          }
          if (this.persona.tipo_EMPLEADO == ('DO')) {
           // this.router.navigate(['/error']);
          
            console.log('si puedes entrar')
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

}
