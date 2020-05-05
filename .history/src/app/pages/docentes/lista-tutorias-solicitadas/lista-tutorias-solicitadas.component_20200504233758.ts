import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-tutorias-solicitadas',
  templateUrl: './lista-tutorias-solicitadas.component.html',
  styleUrls: ['./lista-tutorias-solicitadas.component.scss']
})

export class ListaTutoriasSolicitadasComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;

  constructor(private service: PersonalDataService, private restService: RestService, public route: Router) { }
  // cedula = "1710802925";
  acompanamiento: any
  reforzamiento: any

  id: any
  tema: any
  asignatura: any
  tutoria: any
  fecha: any
  // spidem = 14159 ;
  spidem;
  cedula;
  ids: any
  nombres: any
  observacion: any
  procesaPropagar(data) {
    this.id = data[0].pidm
  }

  ngOnInit() {
    this.access();

    this.spidem= localStorage.getItem('pidm');
    this.cedula= localStorage.getItem('cedula');
    this.listarSolicitudAcompanamiento()
    this.listarSolicitudReforzamiento()
    
  }


  listSolicitudAcompanamiento (ids, tutoria, nombres, tema, observacion,fecha) {
    this.ids = ids
    this.tutoria = tutoria;
    this.nombres = nombres;
    this.tema = tema;
    this.observacion = observacion; 
    this.fecha = fecha;
    

  

  }

    listarSolicitudAcompanamiento() {
      this.restService.findDataById("SolicitadasAcompanamiento/", this.spidem).subscribe(
        data => {
          this.acompanamiento = data
          console.log(this.acompanamiento)
        }
      )
    }

    listSolicitudReforzamiento (ids, tutoria, nombres, asignatura, tema,fecha) {
      this.ids = ids;
      this.tutoria = tutoria;
      this.nombres =nombres;
      this.asignatura = asignatura;
      this.tema = tema;
      this.fecha = fecha;
     
  
    
  
    }
  
      listarSolicitudReforzamiento() {
        this.restService.findDataById("SolicitadasReforzamiento/", this.spidem).subscribe(
          data => {
            this.reforzamiento = data
            console.log(this.reforzamiento)
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
            this.route.navigateByUrl('/error');
          } else {
            // //console.log('JSON', JSON.stringify(this.aux));
            if (data[0] == undefined) {
              //this.router.navigate(['/error']);
              this.route.navigateByUrl('error/');
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

