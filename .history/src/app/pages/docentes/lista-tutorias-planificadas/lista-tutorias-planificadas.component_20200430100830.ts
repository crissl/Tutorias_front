import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-lista-tutorias-planificadas',
  templateUrl: './lista-tutorias-planificadas.component.html',
  styleUrls: ['./lista-tutorias-planificadas.component.scss']
})
export class ListaTutoriasPlanificadasComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;

  constructor(private service: PersonalDataService, private restService: RestService) { }
  cedula = "1310494586";
  tutoria: any
  id: any
  tema: any
  asignatura: any
  fecha: any
  aula: any
  spidem = 350957 ;
  hora: any
  fechaCrea: any
  procesaPropagar(data) {
    this.id = data[0].pidm
  }

  ngOnInit() {
    this.listarTutorias()
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

}


