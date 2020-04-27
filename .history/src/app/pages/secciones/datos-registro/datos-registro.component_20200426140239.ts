import { Component, OnInit, Input } from '@angular/core';

import { ScaleControlStyle } from '@agm/core/services/google-maps-types';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datos-registro',
  templateUrl: './datos-registro.component.html',
  styleUrls: ['./datos-registro.component.scss', './datos-registro.component.css']
})
export class DatosRegistroComponent implements OnInit {
  titleRegistro = TutoriaConstants.DATOSREGISTRO
  @Input() registro:any
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  
  }
  initForm() {this.form =  this.fb.group({
    'tema':  ['',  Validators.required]
  });
}
  





}
