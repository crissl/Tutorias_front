import { Component, OnInit, Inject  } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.component.html',
  styleUrls: ['./registro-asistencias.component.scss']
})
export class RegistroAsistenciasComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  titleLista=    TutoriaConstants.LISTAESTUDIANTE;
  constructor(private restService: RestService, public toast: ToastrService, public dialog: MatDialog) { }
  codA1: any = {
    id: ""}
  codA: any
  // spidem = 14159 ;
  spidem;

  codigoAs: any;
  codigoP: any;
  tema: any;

  ngOnInit() {
    this.spidem= localStorage.getItem('pidm');

    this.listarFormuRegistro();

   }
   
   listRegistro(codigoAs: number, codigo, tema) {
    this.codigoAs = codigoAs;
    this.codigoP = codigo;
    this.tema = tema;
  }

    listarFormuRegistro() {
      this.restService.findDataById("registroAsistentes/", this.spidem).subscribe(
        data => {
          this.codA = data
          console.log(this.codA)
        }
      )
    }

    Asistentes:any;
    openDialog(planificacion:any): void {
      this.restService.get('registroAsistenciaD/'+planificacion.codigo_UZTPLANIF).subscribe(
        data =>{
          const dialogRef = this.dialog.open(RegistroComponent, {
            width: '1000px',
            height: '500PX',
            data: {asistentes:data,planificacion:planificacion},
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result){
              this.listarFormuRegistro();
            }
            console.log('The dialog was closed');
           
          });
          
        }
      )  
    }
  


}
