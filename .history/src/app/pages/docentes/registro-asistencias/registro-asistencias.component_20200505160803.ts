import { Component, OnInit, Inject  } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegistroComponent } from './registro/registro.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private restService: RestService, public toast: ToastrService, public dialog: MatDialog, public route: Router) { }
  codA1: any = {
    id: ""}
  codA: any
  // spidem = 14159 ;
  spidem;

  codigoAs: any;
  codigoP: any;
  tema: any;

  ngOnInit() {
    this.access();

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
          this.route.navigateByUrl('/error');
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
