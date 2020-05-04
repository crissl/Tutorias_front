import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-lista-tutorias-solicitadas',
  templateUrl: './lista-tutorias-solicitadas.component.html',
  styleUrls: ['./lista-tutorias-solicitadas.component.scss']
})

export class ListaTutoriasSolicitadasComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;

  constructor(private service: PersonalDataService, private restService: RestService) { }
  cedula = "1710802925";
  acompanamiento: any
  reforzamiento: any

  id: any
  tema: any
  asignatura: any
  tutoria: any
  fecha: any
  // spidem = 14159 ;
  spidem;
  ids: any
  nombres: any
  observacion: any
  procesaPropagar(data) {
    this.id = data[0].pidm
  }

  ngOnInit() {
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



}

