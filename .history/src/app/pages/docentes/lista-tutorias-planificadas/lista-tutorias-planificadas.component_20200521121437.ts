import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/services/rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tutorias-planificadas',
  templateUrl: './lista-tutorias-planificadas.component.html',
  styleUrls: ['./lista-tutorias-planificadas.component.scss']
})
export class ListaTutoriasPlanificadasComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;

  constructor(private service: PersonalDataService, private restService: RestService, public route: Router) { }
  // cedula = "1722340138";
  tutoria: any
  tutoriaR: any

  id: any
  tema: any
  asignatura: any
  fecha: any
  aula: any
  // spidem = 394924 ;
  // spidem;
  cedula;
  hora: any
  fechaCrea: any
  procesaPropagar(data) {
    this.id = data[0].pidm
  }

  ngOnInit() {
    this.access();

    // this.spidem= localStorage.getItem('pidm');
    this.cedula= localStorage.getItem('cedula');
    this.listarTutorias();
    this.listarTutoriasR();
  }
  
  
  listTutorias (tutoria, tema, asignatura,fecha, aula, hora, fechaCrea) {
    this.tutoria = tutoria;
    this.tema = tema;
    this.asignatura = asignatura;
    this.fecha = fecha;
    this.aula = aula;
    this.hora = hora;
    this.fechaCrea = fechaCrea;

  

  }

    listarTutorias() {
      this.restService.findDataById("TutoriasPlanificadas/", this.spidem).subscribe(
        data => {
          this.tutoria = data
          console.log(this.tutoria)
        }
      )
    }
    listarTutoriasR() {
      this.restService.findDataById("TutoriasPlanificadasR/", this.spidem).subscribe(
        data => {
          this.tutoriaR = data
          console.log(this.tutoriaR)
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


}


