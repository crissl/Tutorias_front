import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionAsistenciaComponent } from './confirmacion-asistencia.component';

describe('ConfirmacionAsistenciaComponent', () => {
  let component: ConfirmacionAsistenciaComponent;
  let fixture: ComponentFixture<ConfirmacionAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
