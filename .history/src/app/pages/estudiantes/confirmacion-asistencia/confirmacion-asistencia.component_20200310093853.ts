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

  nrcs: any
  datosGuardar: any;
  spidem = 357192 ;
  

  
  ngOnInit() {

    listarFormuConfirma(){
      this.restService.findDataById("confirmarAsistencia/", this.spidem).subscribe(
        data => {
          this.nrcs = data
          //console.log(this.nrcs)
        }
      )
    }

  }

}
