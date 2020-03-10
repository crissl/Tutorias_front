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
  codigoAs: any;
  codigoP: any;
  tema: any;
  listConf(codigoAs: number, codigo, tema) {
    this.codigoAs = codigoAs;
    this.codigoP = codigo;
    this.tema = tema;
  }

    listarFormuConfirma() {
      this.restService.findDataById("confirmarAsistencia/", this.spidem).subscribe(
        data => {
          this.codA = data
          console.log(this.c)
        }
      )
    }

  }
