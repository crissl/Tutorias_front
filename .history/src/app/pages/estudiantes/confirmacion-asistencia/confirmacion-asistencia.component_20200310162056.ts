import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { FormularioConfirmacionComponent } from './formulario-confirmacion/formulario-confirmacion.component';
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

  constructor(private restService: RestService, public toast: ToastrService) { }

  codA1: any = {
    id: ""}
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
          console.log(this.codA)
        }
      )
    }

  }
  export class DialogOverviewExample {

    animal: string;
    name: string;

    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(ConfirmacionAsistenciaComponent , {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  }
  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class ConfirmacionAsistenciaComponent {
    constructor(
      public dialogRef: MatDialogRef<ConfirmacionAsistenciaComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
     onNoClick(): void {
      this.dialogRef.close();
    }
  }
  
