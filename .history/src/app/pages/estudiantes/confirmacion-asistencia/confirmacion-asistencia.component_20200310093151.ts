import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-confirmacion-asistencia',
  templateUrl: './confirmacion-asistencia.component.html',
  styleUrls: ['./confirmacion-asistencia.component.scss']
})
export class ConfirmacionAsistenciaComponent implements OnInit {
  constructor(private restService: RestService, publ) { }


  ngOnInit() {
  }

}
