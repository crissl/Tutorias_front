import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionEstudianteComponent } from './confirmacion-estudiante.component';

describe('ConfirmacionEstudianteComponent', () => {
  let component: ConfirmacionEstudianteComponent;
  let fixture: ComponentFixture<ConfirmacionEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
