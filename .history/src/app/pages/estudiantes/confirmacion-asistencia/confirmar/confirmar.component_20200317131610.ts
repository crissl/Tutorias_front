import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../confirmacion-asistencia.component';
import { TutoriaConstants } from 'app/constants/constants';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss'],
  

})
export class ConfirmarComponent implements OnInit {

  titleEstudiante = TutoriaConstants.DATOSESTUDIANTE;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;

  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService, public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data)
  }

}


