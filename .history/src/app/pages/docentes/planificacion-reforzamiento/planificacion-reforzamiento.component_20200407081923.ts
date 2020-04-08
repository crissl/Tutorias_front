import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-planificacion-reforzamiento',
  templateUrl: './planificacion-reforzamiento.component.html',
  styleUrls: ['./planificacion-reforzamiento.component.scss']
})
export class PlanificacionReforzamientoComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  constructor(private service: PersonalDataService, private restService: RestService ) { }

  datosGuardar: any;
  ncr: any;
  nrcs: any
  spidem = 334571;
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
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        //console.log(this.nrcs)
      }
    )
  }
   expressType: string;
   typeExpress: string[] = [ 'Si', 'No'];
   radioOptions: FormGroup;

   expressType2: string;
   typeExpress2: string[] = [ 'AULA', 'LUGAR'];
   radioOptions2: FormGroup;


}
