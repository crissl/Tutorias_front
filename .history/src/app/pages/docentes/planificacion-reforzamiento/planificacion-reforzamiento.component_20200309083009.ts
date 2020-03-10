import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service';


@Component({
  selector: 'app-planificacion-reforzamiento',
  templateUrl: './planificacion-reforzamiento.component.html',
  styleUrls: ['./planificacion-reforzamiento.component.scss']
})
export class PlanificacionReforzamientoComponent implements OnInit {
  constructor(private service: PersonalDataService, private restService: RestService ) { }
  datosGuardar : any;
  ncr:any;

  cedula="1725412306";
  ngOnInit() {
   }
   id:any
   procesaPropagar(data){
     this.id=data[0].pidm
     //console.log(data[0].pidm)
   }
   tema:any={tema:""
   }

   
   listarNrc(){
     this.restService.findData(this.id).subscribe(
       data => {

       }
     )
   }
}