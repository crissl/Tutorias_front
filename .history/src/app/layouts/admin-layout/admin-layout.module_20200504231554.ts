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
import { RegistroAsistenciasComponent } from '../../pages/docentes/registro-asistencias/registro-asistencias.component';
import { DatosEstudianteComponent } from '../../pages/secciones/datos-estudiante/datos-estudiante.component';
import { DatosDocenteComponent } from '../../pages/secciones/datos-docente/datos-docente.component';
import { DatosRegistroComponent } from '../../pages/secciones/datos-registro/datos-registro.component';
import { AlertComponent } from '../../pages/secciones/alert/alert.component';

import { ToastrModule } from 'ngx-toastr';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatCardModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTreeModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
} from '@angular/material';
import { PacComponent } from 'app/pages/pac/pac.component';
import { DatosPersonalesComponent } from 'app/pages/secciones/datos-personales/datos-personales.component';
import { DatosAcademicosComponent } from 'app/pages/secciones/datos-academicos/datos-academicos.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConfirmarComponent } from '../../pages/estudiantes/confirmacion-asistencia/confirmar/confirmar.component';
import { ListaAlumnosAcompanamientoComponent } from 'app/pages/docentes/lista-alumnos-acompanamiento/lista-alumnos-acompanamiento.component';
import { ListaTutoriasPlanificadasComponent } from 'app/pages/docentes/lista-tutorias-planificadas/lista-tutorias-planificadas.component';
import { ListaTutoriasSolicitadasComponent } from 'app/pages/docentes/lista-tutorias-solicitadas/lista-tutorias-solicitadas.component';
import { RegistroComponent } from '../../pages/docentes/registro-asistencias/registro/registro.component';
import { ErrorComponent } from '../pages/error/error.component';



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
    MatTooltipModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatRadioModule,
  
    
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
    DatosDocenteComponent,
    ConfirmarComponent,
    AlertComponent,
    ListaAlumnosAcompanamientoComponent,
    ListaTutoriasSolicitadasComponent,
    ListaTutoriasPlanificadasComponent,
    RegistroComponent,
    ErrorComponent
    
    
  ],
 

  entryComponents: [
    ConfirmarComponent,
    RegistroComponent,

  ],
})

export class AdminLayoutModule {}
