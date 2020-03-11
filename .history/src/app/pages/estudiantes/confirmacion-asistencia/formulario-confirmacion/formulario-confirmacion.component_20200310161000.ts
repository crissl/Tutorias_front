import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../confirmacion-asistencia.component';

@Component({
  selector: 'app-formulario-confirmacion',
  templateUrl: './formulario-confirmacion.component.html',
  styleUrls: ['./formulario-confirmacion.component.scss']
})

export class FormularioConfirmacionComponent implements OnInit   {

  constructor(
   

    public dialogRef: MatDialogRef<FormularioConfirmacionComponent >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
   
  onNoClick(): void {
    this.dialogRef.close();
  }
}
