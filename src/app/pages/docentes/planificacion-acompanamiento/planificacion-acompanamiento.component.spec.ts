import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionAcompanamientoComponent } from './planificacion-acompanamiento.component';

describe('PlanificacionAcompanamientoComponent', () => {
  let component: PlanificacionAcompanamientoComponent;
  let fixture: ComponentFixture<PlanificacionAcompanamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificacionAcompanamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificacionAcompanamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
