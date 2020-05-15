import { Component, OnInit } from '@angular/core';

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


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  getUserbyid(id: string) {
    this.usuarioService.getPidmByUsuario(id).subscribe(
      data => {
        if (data) {
          this.usuarioData = data;
          this.id = this.usuarioData[0].id;
          this.datos = true;
          if (Object.keys(data).length === 0) {
            this.datos = false;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
