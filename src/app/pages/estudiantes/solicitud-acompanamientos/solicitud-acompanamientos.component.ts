import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';

@Component({
  selector: 'app-solicitud-acompanamientos',
  templateUrl: './solicitud-acompanamientos.component.html',
  styleUrls: ['./solicitud-acompanamientos.component.scss']
})
export class SolicitudAcompanamientosComponent implements OnInit {


  constructor(private service: PersonalDataService) { }

  cedula="1725412306";
  ngOnInit() {
    
  }

}
