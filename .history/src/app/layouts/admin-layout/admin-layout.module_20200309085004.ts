import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SolicitudReforzamientoComponent } from '../../pages/estudiantes/solicitud-reforzamiento/solicitud-reforzamiento.component';
import { SolicitudAcompanamientosComponent } from '../../pages/estudiantes/solicitud-acompanamientos/solicitud-acompanamientos.component';
import { ConfirmacionAsistenciaComponent } from '../../pages/estudiantes/confirmacion-asistencia/confirmacion-asistencia.component';
// tslint:disable-next-line:max-line-length
import { PlanificacionReforzamientoComponent } from '../../pages/docentes/planificacion-reforzamiento/planificacion-reforzamiento.component';
// tslint:disable-next-line:max-line-length
import { PlanificacionAcompanamientoComponent } from '../../pages/docentes/planificacion-acompanamiento/planificacion-acompanamiento.component';
import { RegistroAsistenciasComponent } from "../../pages/docentes/registro-asistencias/registro-asistencias.component';
import { DatosEstudianteComponent } from '../../pages/secciones/datos-estudiante/datos-estudiante.component';
import { DatosDocenteComponent } from '../../pages/secciones/datos-docente/datos-docente.component';
import { DatosRegistroComponent } from '../../pages/secciones/datos-registro/datos-registro.component';
import { ToastrModule } from 'ngx-toastr';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { PacComponent } from 'app/pages/pac/pac.component';
import { DatosPersonalesComponent } from 'app/pages/secciones/datos-personales/datos-personales.component';
import { DatosAcademicosComponent } from 'app/pages/secciones/datos-academicos/datos-academicos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PacComponent,
    DatosPersonalesComponent,
    DatosAcademicosComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SolicitudReforzamientoComponent,
    SolicitudAcompanamientosComponent,
    ConfirmacionAsistenciaComponent,
    DatosEstudianteComponent,
    DatosRegistroComponent,
    PlanificacionReforzamientoComponent,
    PlanificacionAcompanamientoComponent,
    RegistroAsistenciasComponent,
    DatosDocenteComponent
  ]
})

export class AdminLayoutModule {}