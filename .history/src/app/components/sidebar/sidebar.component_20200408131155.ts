import { Component, OnInit } from '@angular/core';

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
  { path: '/registroAsistencia', title: 'Registro Asistencias', icon: 'chrome_reader_mode', class: '' }


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
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
