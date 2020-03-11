import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-confirmacion',
  templateUrl: './formulario-confirmacion.component.html',
  styleUrls: ['./formulario-confirmacion.component.scss']
})

export class FormularioConfirmacionComponent  {

  constructor(
    public dialogRef: MatDialogRef<FormularioConfirmacionComponent >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
   
    ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
