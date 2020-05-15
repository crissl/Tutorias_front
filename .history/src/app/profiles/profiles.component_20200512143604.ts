import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { Usuario } from 'app/models/Usuario';




@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  public nombres : String = localStorage.getItem('nombreCompleto');

  public cedula : String = localStorage.getItem('cedula'); 
  public codId: String = localStorage.getItem('codigo');
  public pidm: String = localStorage.getItem('pidm');
  public usuarioData: Usuario;
  datos: boolean;
  id: any;


  constructor(private personaldataService: PersonalDataService) { }

  ngOnInit() {
  }
  getUserbyid(id: number) {
    this.personalDataService.getUsuario(id).subscribe
      (data => {
        if (data) {
          this.usuarioData = data[0];
          console.log('this.usuarioData', this.usuarioData)
          this.datos = true;
          this.spinner.hide();

          if (Object.keys(data).length === 0) {
            this.datos = false;
          }
        }
      },
        err => {
          console.log(err);
        });
  }

}
