import { Component, OnInit, Input } from '@angular/core';
// import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/models/Usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'app/services/rest.service';
import { AuthService } from 'app/services/auth.service';




@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  public isLoggedIn = false;
  public usuarioData: Usuario;
  datos: boolean;
  id: any;

  pidm;
  cedula;
  nombres;
  codId;
  

  constructor( private router: Router, private restService: RestService, public route: Router, private authService: AuthService,) { }

  ngOnInit() {

    this.pidm = localStorage.getItem('pidm');
    this.cedula = localStorage.getItem('cedula');
    this.nombres = localStorage.getItem('nombreCompleto');
    this.codId = localStorage.getItem('codigo');

  }
 usuarioPerfil
  
}
