import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTutoriasSolicitadasComponent } from './lista-tutorias-solicitadas.component';

describe('ListaTutoriasSolicitadasComponent', () => {
  let component: ListaTutoriasSolicitadasComponent;
  let fixture: ComponentFixture<ListaTutoriasSolicitadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTutoriasSolicitadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTutoriasSolicitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
