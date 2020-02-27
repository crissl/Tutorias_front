import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConfirmacionEstudianteComponent } from './pages/estudiantes/confirmacion-estudiante/confirmacion-estudiante.component';
import { PlanificacionReforzamientoComponent } from './pages/docentes/planificacion-reforzamiento/planificacion-reforzamiento.component';
import { PlanificacionAcompanamientoComponent } from './pages/docentes/planificacion-acompanamiento/planificacion-acompanamiento.component';
import { RegistroAsistenciaComponent } from './pages/docentes/registro-asistencia/registro-asistencia.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ConfirmacionEstudianteComponent,
    PlanificacionReforzamientoComponent,
    PlanificacionAcompanamientoComponent,
    RegistroAsistenciaComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
