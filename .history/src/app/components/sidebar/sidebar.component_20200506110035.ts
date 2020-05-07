import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { PersonalDataService } from 'app/services/personal-data.service';
import { Router } from '@angular/router';
import { RestService } from 'app/service/rest.service';
import { HttpErrorResponse } from '@angular/common/http';

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

export const ROUTESA: RouteInfo[] = [   //Acompañamiento

  { path: '/solicitudAcompanamiento', title: 'Solicitud', icon: 'supervised_user_circle', class: '' },
  { path: '/planificacionAcompanamiento', title: 'Planifición', icon: 'assignment_ind', class: '' },
  { path: '/confirmacionAsistencia', title: 'Asistencia', icon: 'playlist_add_check', class: '' },
  { path: '/listaAlumnosAcompanamiento', title: 'Lista', icon: 'chrome_reader_mode', class: '' },


];


export const ROUTESR: RouteInfo[] = [ //Reforzamiento

  { path: '/solicitudReforzamiento', title: 'Solicitud', icon: 'announcement', class: '' },
  { path: '/planificacionReforzamieto', title: 'Planificación', icon: 'assignment', class: '' },
  { path: '/registroAsistencia', title: 'Asistencias', icon: 'playlist_add', class: '' }

];

export const ROUTEST: RouteInfo[] = [  //Tutorias

  { path: '/listaTutoriasPlanificadas', title: 'Planifiacadas', icon: 'chrome_reader_mode', class: '' },
  { path: '/listaTutoriasSolicitadas', title: 'Solicitadas', icon: 'chrome_reader_mode', class: '' }

];


export const ROUTESE: RouteInfo[] = [  //Acompañamiento Estudiante

  { path: '/solicitudAcompanamiento', title: 'Solicitud', icon: 'supervised_user_circle', class: '' },
  { path: '/confirmacionAsistencia', title: 'Asistencia', icon: 'playlist_add_check', class: '' },


];

export const ROUTESRE: RouteInfo[] = [ //Reforzamiento Estudiante

  { path: '/solicitudReforzamiento', title: 'Solicitud', icon: 'announcement', class: '' },

];

export const ROUTESTE: RouteInfo[] = [  //Tutorias  Estudiante

  { path: '/listaTutoriasPlanificadas', title: 'Planificadas', icon: 'chrome_reader_mode', class: '' },

];


export const ROUTESDO: RouteInfo[] = [  //Acompañamiento Docente

  { path: '/planificacionAcompanamiento', title: 'Planifición', icon: 'assignment_ind', class: '' },
  { path: '/listaAlumnosAcompanamiento', title: 'Lista', icon: 'chrome_reader_mode', class: '' },

];

export const ROUTESRD: RouteInfo[] = [ //Reforzamiento Docente

  { path: '/planificacionReforzamieto', title: 'Planificación', icon: 'assignment', class: '' },
  { path: '/registroAsistencia', title: 'Asistencias', icon: 'playlist_add', class: '' }

];

export const ROUTESTD: RouteInfo[] = [  //Tutorias  Docente

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


  persona: any = [];
  cedula: any = [];
  menuItems: any[];
  menuItems2: any[];
  menuItems3: any[];
  menuItems4: any[];


  usuarioData: any=[];
  pidm;
  id;
  usuario: any;
  spidem;
  nombreC:any;

  constructor(private authService:AuthService, private personaldataService:PersonalDataService,private router: Router,private restService: RestService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
        this.userName = this.authService.getUserName();
       console.log(this.userName);
        this.personaldataService.findDataUser('https://servicios.espe.edu.ec:8443/UPBannerWS-0.0.1-SNAPSHOT/UPBannerWS/user/',this.userName).subscribe((data: {}) => {
          this.persona = data[0];
          this.personaldataService.findDataUser('https://servicios.espe.edu.ec:8443/miEspeRPWS-0.0.1-SNAPSHOT/restWs/userldap/',this.userName).subscribe(
            data =>{
              //this.nombreC = data[0].nombreCompleto
              this.initialiseInvites2(data.nombreCompleto,data.codId)
              this.personaldataService.findDataUser('https://miespemovil.espe.edu.ec/reportes/reporteWs/cedulaById/',data.codId).subscribe(
                data =>{
                  this.cedula = data[0];

                  this.initialiseInvites1(this.cedula.cedula);
                }
              )
            }
          )
          console.log('USUARIO', this.persona.pidm);
          this.initialiseInvites(this.persona.pidm);
          this.getUsuario();
        });
  
    }
   
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
 

  // getmenu() {
  //   console.log(atob(localStorage.getItem('iduser')))
  //   if (localStorage.getItem('iduser')) {
  //       this.personaldataService.findDataUser1(atob(localStorage.getItem('iduser'))).subscribe(
  //           data => {
  //               console.log(data)
  //               if (data.opciones) {
  //                   this.menuItems = Array.from(
  //                       new Set(data.opciones.map(x => x.opcion))
  //                   ).map(datos => {
  //                       return {
  //                           opcion: data.opciones.find(s => s.opcion === datos).opcion,
  //                           url: data.opciones.find(s => s.opcion === datos).url,
  //                           icono: data.opciones.find(s => s.opcion === datos).icono,
  //                           clase: data.opciones.find(s => s.opcion === datos).clase
  //                       };
  //                   });
  //               }this.router.navigate(['/mis-formularios']);
  //           },
  //           error => {
  //               console.log(error);
  //           }
  //       );
  
  //   }
    

  // }


  getUsuario(){
    this.persona = [];
    this.restService.get('tipoPersona/' + localStorage.getItem('pidm')).subscribe((data: {}) => {
        this.persona = data[0];
        console.log('PER',this.persona);
        // this.router.navigate(['personal']);
        if (this.persona === undefined) {
          this.menuItems2 = ROUTESE.filter(menuItem => menuItem);
          this.menuItems3 = ROUTESRE.filter(menuItem => menuItem);
          this.menuItems4 = ROUTESTE.filter(menuItem => menuItem);
            // this.validacionpagina();
        } else {
            // //console.log('JSON', JSON.stringify(this.aux));
            if (data[0] == undefined) {
              this.menuItems2 = ROUTESE.filter(menuItem => menuItem);
              this.menuItems3 = ROUTESRE.filter(menuItem => menuItem);
              this.menuItems4 = ROUTESTE.filter(menuItem => menuItem);
                // this.validacionpagina();
            }
            if (this.persona.tipo_EMPLEADO == ('DO')) {
              this.menuItems2 = ROUTESDO.filter(menuItem => menuItem);
              this.menuItems3 = ROUTESRD.filter(menuItem => menuItem);
              this.menuItems4 = ROUTESTD.filter(menuItem => menuItem);
  
                // //console.log('SERVIDOR PUBLICO' + ROUTES3.filter(menuItem => menuItem))

            }

        }
    }, (err) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 500) {
                // //console.log('ERROR');
                this.router.navigate(['/error']);
            }
        }
    }
    )

  }
  initialiseInvites(upidm) {
    // Set default values and re-fetch any data you need.
    // localStorage.getItem('PID');
    // //console.log('pidm', btoa(upidm))
    localStorage.setItem('pidm', upidm);
    // localStorage.getItem('pidm') 
  }
  initialiseInvites1(cedula){
    localStorage.setItem('cedula', cedula);
  }
  initialiseInvites2(nombreC,codId){
    localStorage.setItem('nombreCompleto', nombreC);
    //console.log(localStorage.getItem('nombreCompleto'))
    localStorage.setItem('codigo', codId);
  }

  tipoUsuario() {

    this.restService.findDataById("tipoPersona/", this.spidem).subscribe(
      data => {
        this.usuario = data;
        console.log("El usuario",this.usuario)
        if (this.usuario == undefined) {
          console.log("El usuario no tiene permisos")
        }

      }
    )
  }  



  getUser(){
    t
  }

  
  }
  // userName(userName: any) {
  //   throw new Error("Method not implemented.");
  // }






