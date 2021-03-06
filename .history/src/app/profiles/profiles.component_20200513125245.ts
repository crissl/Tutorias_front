import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/models/Usuario';




@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  // public nombres : String = localStorage.getItem('nombreCompleto');
  // public cedula : String = localStorage.getItem('cedula'); 
  // public codId: String = localStorage.getItem('codigo');
  // public pidm: String = localStorage.getItem('pidm');

  public usuarioData: Usuario;
  datos: boolean;
  id: any;
  pidm: string;
  cedula: string;
  nombres: string;
  codId: string;

  

  constructor() { }

  ngOnInit() {
    this.pidm = localStorage.getItem('pidm');
    this.cedula = localStorage.getItem('cedula');
    this.nombres = localStorage.getItem('nombreCompleto');
    this.codId = localStorage.getItem('codigo');

  }
  
}
