import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmacion-asistencia',
  templateUrl: './confirmacion-asistencia.component.html',
  styleUrls: ['./confirmacion-asistencia.component.scss']
})
export class ConfirmacionAsistenciaComponent implements OnInit {
  constructor(private restService: RestService, public toast: ToastrService) { }

  codA1: any = {
    id: ""
  }
  codA: any
  spidem = 357192 ;

  ngOnInit() {
    this.listarFormuConfirma();
  }

  codigoP: any;
  tema: any;
  guardar(nrc: number, codigo, tema) {
    this.nrc = nrc;
    this.te = codigo;

    listarFormuConfirma() {
      this.restService.findDataById("confirmarAsistencia/", this.spidem).subscribe(
        data => {
          this.codA = data
          //console.log(this.nrcs)
        }
      )
    }

  }