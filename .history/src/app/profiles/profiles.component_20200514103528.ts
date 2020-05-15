import { Component, OnInit, Input } from '@angular/core';
// import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/models/Usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'app/services/rest.service';




@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  public usuarioData: Usuario;
  datos: boolean;
  id: any;

  pidm;
  cedula;
  nombres;
  codId;
  

  constructor( private router: Router, private restService: RestService, public route: Router, (private authService: AuthService,) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    this.access();
    this.pidm = localStorage.getItem('pidm');
    this.cedula = localStorage.getItem('cedula');
    this.nombres = localStorage.getItem('nombreCompleto');
    this.codId = localStorage.getItem('codigo');

  }
  persona: any = [];
  access() {
    this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
      this.persona = data[0];
      // console.log('PER', this.persona);
      // this.router.navigate(['personal']);
      if (this.persona === undefined) {
        // console.log('tiene acceso')
      } else {
        // //console.log('JSON', JSON.stringify(this.aux));
        if (data[0] == undefined) {
          //this.router.navigate(['/error']);
          // console.log('tiene acceso')

        }
        if (this.persona.tipo_EMPLEADO == ('DO')) {
          // this.router.navigate(['/error']);
        }
      }
    }, (err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 500) {
          // //console.log('ERROR');
          this.route.navigate(['/']);
        }
      }
    }
    )

  }
  
}
