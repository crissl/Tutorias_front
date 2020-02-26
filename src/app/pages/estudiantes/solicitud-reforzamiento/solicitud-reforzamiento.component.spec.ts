import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudReforzamientoComponent } from './solicitud-reforzamiento.component';

describe('SolicitudReforzamientoComponent', () => {
  let component: SolicitudReforzamientoComponent;
  let fixture: ComponentFixture<SolicitudReforzamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudReforzamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudReforzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
