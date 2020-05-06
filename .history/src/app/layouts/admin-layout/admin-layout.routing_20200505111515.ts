import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PacComponent } from 'app/pages/pac/pac.component';
import { SolicitudReforzamientoComponent } from '../../pages/estudiantes/solicitud-reforzamiento/solicitud-reforzamiento.component';
import { SolicitudAcompanamientosComponent } from '../../pages/estudiantes/solicitud-acompanamientos/solicitud-acompanamientos.component';
import { ConfirmacionAsistenciaComponent } from '../../pages/estudiantes/confirmacion-asistencia/confirmacion-asistencia.component';
// tslint:disable-next-line:max-line-length
import { PlanificacionReforzamientoComponent } from '../../pages/docentes/planificacion-reforzamiento/planificacion-reforzamiento.component';
// tslint:disable-next-line:max-line-length
import { PlanificacionAcompanamientoComponent } from '../../pages/docentes/planificacion-acompanamiento/planificacion-acompanamiento.component';
import { RegistroAsistenciasComponent } from '../../pages/docentes/registro-asistencias/registro-asistencias.component';
import { ListaAlumnosAcompanamientoComponent } from 'app/pages/docentes/lista-alumnos-acompanamiento/lista-alumnos-acompanamiento.component';
import { ListaTutoriasSolicitadasComponent } from 'app/pages/docentes/lista-tutorias-solicitadas/lista-tutorias-solicitadas.component';
import { ListaTutoriasPlanificadasComponent } from 'app/pages/docentes/lista-tutorias-planificadas/lista-tutorias-planificadas.component';
import { ErrorComponent } from '../../pages/error/error.component';

export const AdminLayoutRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'dashboard',
        component: InicioComponent
    }]},
    // , {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'hojaSalida',      component: InicioComponent },
    { path: 'matriculaPac',   component: PacComponent },
    { path: 'matriculaUte',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'solicitudReforzamiento',  component: SolicitudReforzamientoComponent},
    { path: 'solicitudAcompanamiento', component: SolicitudAcompanamientosComponent},
    { path: 'confirmacionAsistencia',   component: ConfirmacionAsistenciaComponent},
    { path: 'planificacionReforzamieto',   component: PlanificacionReforzamientoComponent},
    { path: 'planificacionAcompanamiento',   component: PlanificacionAcompanamientoComponent},
    { path: 'registroAsistencia',   component: RegistroAsistenciasComponent},
    { path: 'userPro',   component: UserProfileComponent},
    { path: 'listaAlumnosAcompanamiento',   component: ListaAlumnosAcompanamientoComponent},
    { path: 'listaTutoriasPlanificadas',   component: ListaTutoriasPlanificadasComponent},
    { path: 'listaTutoriasSolicitadas',   component: ListaTutoriasSolicitadasComponent},
    { path: 'error',   component: ErrorComponent},

    




];
