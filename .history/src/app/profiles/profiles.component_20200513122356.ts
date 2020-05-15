import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/models/Usuario';




@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {


  public usuarioData: Usuario;
  datos: boolean;
  id: any;

  

  constructor() { }

  ngOnInit() {
    

  }
  
}
