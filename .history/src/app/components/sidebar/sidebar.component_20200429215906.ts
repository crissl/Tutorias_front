import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { PersonalDataService } from 'app/services/personal-data.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: '/hojaSalida', title: 'Hoja de Salida', icon: 'dashboard', class: '' },
  // { path: '/matriculaPac', title: 'Matrícula PAC', icon: 'person', class: '' },
  // { path: '/matriculaUte', title: 'Matrícula Titulación', icon: 'content_paste', class: '' },
  { path: '/solicitudAcompanamiento', title: 'Solicitud Acompañamiento', icon: 'supervised_user_circle', class: '' },
  { path: '/solicitudReforzamiento', title: ' Solicitud Reforzamiento', icon: 'announcement', class: '' },
  { path: '/confirmacionAsistencia', title: ' Confirmación Asistencia', icon: 'how_to_reg', class: '' },
  { path: '/planificacionAcompanamiento', title: 'Planifición Acompañamiento', icon: 'assignment_ind', class: '' },
  { path: '/planificacionReforzamieto', title: ' Planificación Reforzamiento', icon: 'assignment', class: '' },
  { path: '/registroAsistencia', title: 'Registro Asistencias', icon: 'chrome_reader_mode', class: '' },
  { path: '/listaAlumnosAcompanamiento', title: 'Alumnos Acompañamiento', icon: 'chrome_reader_mode', class: '' },
  { path: '/listaTutoriasPlanificadas', title: 'Tutorias Planifiacadas', icon: 'chrome_reader_mode', class: '' },
  { path: '/listaTutoriasSolicitadas', title: 'Tutorias Solicitadas', icon: 'chrome_reader_mode', class: '' }


  /*{ path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },*/

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isLoggedIn = false;
  public userName: string;
  menuSolicitudes: any[];
  menuPlanificaciones: any[];
  menuAS: any[];



  menuItems: any[];
  menuItems2: any[];
  usuarioData: any=[];
  pidm;
  id;

  constructor(private authService:AuthService, private personaldataService:PersonalDataService,private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
        this.userName = this.authService.getUserName();
        this.getUserbyid(this.userName);
    setTimeout(() => {
        this.getmenu();
    }, 1000);
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  getUserbyid(id: any) {
    this.personaldataService.getUser(id).subscribe(
      data => {
          if (data) {
              this.usuarioData = data;
              this.pidm = this.usuarioData[0].pidm;
              this.id = this.usuarioData[0].id;
              localStorage.setItem('iduser',btoa(this.id));
              localStorage.setItem('pidm', btoa(this.pidm));
              console.log('USUARIO',this.usuarioData)
              console.log('seteo del localstorage slidebar pidm ',this.pidm, ' id ',this.id)

              if (Object.keys(data).length === 0) {
              }
          }
      },
      err => {
          console.log(err);
      }
  );
  }

  getmenu() {
    console.log(atob(localStorage.getItem('iduser')))
    if (localStorage.getItem('iduser')) {
        this.personaldataService.findDataUser(atob(localStorage.getItem('iduser'))).subscribe(
            data => {
                console.log(data)
                if (data.opciones) {
                    this.menuItems = Array.from(
                        new Set(data.opciones.map(x => x.opcion))
                    ).map(datos => {
                        return {
                            opcion: data.opciones.find(s => s.opcion === datos).opcion,
                            url: data.opciones.find(s => s.opcion === datos).url,
                            icono: data.opciones.find(s => s.opcion === datos).icono,
                            clase: data.opciones.find(s => s.opcion === datos).clase
                        };
                    });
                }this.router.navigate(['/mis-formularios']);
            },
            error => {
                console.log(error);
            }
        );
  
    }
    
  }
  }
  // userName(userName: any) {
  //   throw new Error("Method not implemented.");
  // }






