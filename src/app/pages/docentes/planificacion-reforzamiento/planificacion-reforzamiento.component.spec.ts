import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionReforzamientoComponent } from './planificacion-reforzamiento.component';

describe('PlanificacionReforzamientoComponent', () => {
  let component: PlanificacionReforzamientoComponent;
  let fixture: ComponentFixture<PlanificacionReforzamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificacionReforzamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificacionReforzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
