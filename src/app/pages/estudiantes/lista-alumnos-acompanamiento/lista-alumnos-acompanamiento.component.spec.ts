import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnosAcompanamientoComponent } from './lista-alumnos-acompanamiento.component';

describe('ListaAlumnosAcompanamientoComponent', () => {
  let component: ListaAlumnosAcompanamientoComponent;
  let fixture: ComponentFixture<ListaAlumnosAcompanamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlumnosAcompanamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnosAcompanamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
