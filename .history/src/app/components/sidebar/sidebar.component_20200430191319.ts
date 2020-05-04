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

export const ROUTESA: RouteInfo[] = [

  { path: '/solicitudAcompanamiento', title: 'Solicitud', icon: 'supervised_user_circle', class: '' },
  { path: '/planificacionAcompanamiento', title: 'Planifición', icon: 'assignment_ind', class: '' },
  { path: '/confirmacionAsistencia', title: 'Asistencia', icon: 'playlist_add_check', class: '' },
  { path: '/listaAlumnosAcompanamiento', title: 'Lista', icon: 'chrome_reader_mode', class: '' },


];


export const ROUTESR: RouteInfo[] = [

  { path: '/solicitudReforzamiento', title: 'Solicitud', icon: 'announcement', class: '' },
  { path: '/planificacionReforzamieto', title: 'Planificación', icon: 'assignment', class: '' },
  { path: '/registroAsistencia', title: 'Asistencias', icon: 'playlist_add', class: '' }

];

export const ROUTEST: RouteInfo[] = [

  { path: '/listaTutoriasPlanificadas', title: 'Planifiacadas', icon: 'chrome_reader_mode', class: '' },
  { path: '/listaTutoriasSolicitadas', title: 'Solicitadas', icon: 'chrome_reader_mode', class: '' }

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
  menuAsistencias: any[];
  menuListados: any[];




  menuItems: any[];
  menuItems2: any[];
  menuItems3: any[];
  menuItems4: any[];


  usuarioData: any=[];
  pidm;
  id;

  constructor(private authService:AuthService, private personaldataService:PersonalDataService,private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
        this.userName = this.authService.getUserName();
       
        this.personaldataService.get('user/' + this.userName).subscribe((data: {}) => {
          this.persona = data[0];
          // //console.log('USUARIO', this.persona.pidm);
          this.initialiseInvites(this.persona.pidm);
  
  
        });
  
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems2 = ROUTESA.filter(menuItem => menuItem);
    this.menuItems3 = ROUTESR.filter(menuItem => menuItem);
    this.menuItems4 = ROUTEST.filter(menuItem => menuItem);



  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
 

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






