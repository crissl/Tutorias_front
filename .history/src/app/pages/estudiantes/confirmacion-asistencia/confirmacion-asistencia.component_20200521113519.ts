import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'app/services/rest.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-confirmacion-asistencia',
  templateUrl: './confirmacion-asistencia.component.html',
  styleUrls: ['./confirmacion-asistencia.component.scss']
})


export class ConfirmacionAsistenciaComponent implements OnInit {

  constructor(private restService: RestService, public toast: ToastrService, public dialog: MatDialog, public route: Router) { }

  codA1: any = {
    id: ""}
  codA: any
   spidem = 29829   //21619
  
  spidem ;
  codigoAs: any;
  codigoP: any;
  tema: any;

  ngOnInit() {
    this.access();

    // this.spidem= localStorage.getItem('pidm');

    this.listarFormuConfirma();
  }

  listConf(codigoAs: number, codigo, tema) {
    this.codigoAs = codigoAs;
    this.codigoP = codigo;
    this.tema = tema;
  }

    listarFormuConfirma() {
      this.restService.findDataById("confirmarAsistencia/", this.spidem).subscribe(
        data => {
          this.codA = data
          console.log("pendientes",this.codA)
        }
      )
    }

   
    openDialog(planificacion:any): void {
      this.restService.getData('buscaIdAsistente/'+planificacion.uztasistentes_CODIGO).subscribe(
        (data:{})=>{
          const dialogRef = this.dialog.open(ConfirmarComponent, {
            width: '1000px',
            height: '500PX',
            data: {asistencia: data,info: planificacion},
          });
          dialogRef.afterClosed().subscribe(result => {
            if(result){
               console.log("se creo")
               this. listarFormuConfirma()
            }
            console.log('The dialog was closed');

          });
        }
      )
      //
     
      //


    }
    persona:any =[];
      access() {
        this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
          this.persona = data[0];
          console.log('PER', this.persona);
          // this.router.navigate(['personal']);
          if (this.persona === undefined) {
            console.log('tiene acceso')
          } else {
            // //console.log('JSON', JSON.stringify(this.aux));
            if (data[0] == undefined) {
              //this.router.navigate(['/error']);
              console.log('tiene acceso')

            }
            if (this.persona.tipo_EMPLEADO == ('DO')) {
             // this.router.navigate(['/error']);
            
             this.route.navigateByUrl('/error');

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

  
  