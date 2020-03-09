import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.component.html',
  styleUrls: ['./registro-asistencias.component.scss']
})
export class RegistroAsistenciasComponent implements OnInit {

  datosGuardar: any;
  ncr: any;

  cedula = "1725412306";
  ngOnInit() {
   }
   id:any
   procesaPropagar(data) {
     this.id = data[0].pidm
     //console.log(data[0].pidm)
   }
  tema: any = {
    tema: ""
  }

   listarNrc() {
     this.restService.findData(this.id).subscribe(
       data => {

}
