import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTutoriasPlanificadasComponent } from './lista-tutorias-planificadas.component';

describe('ListaTutoriasPlanificadasComponent', () => {
  let component: ListaTutoriasPlanificadasComponent;
  let fixture: ComponentFixture<ListaTutoriasPlanificadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTutoriasPlanificadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTutoriasPlanificadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
