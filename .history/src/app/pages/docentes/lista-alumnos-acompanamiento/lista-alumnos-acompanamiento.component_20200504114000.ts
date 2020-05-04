import { Component, OnInit } from '@angular/core';
import { TutoriaConstants } from 'app/constants/constants';
import { RestService } from 'app/service/rest.service';
import { PersonalDataService } from 'app/services/personal-data.service';

@Component({
  selector: 'app-lista-alumnos-acompanamiento',
  templateUrl: './lista-alumnos-acompanamiento.component.html',
  styleUrls: ['./lista-alumnos-acompanamiento.component.scss']
})
export class ListaAlumnosAcompanamientoComponent implements OnInit {
  titleDocente = TutoriaConstants.DATOSDOCENTE;


  constructor(private service: PersonalDataService, private restService: RestService) { }
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

}
