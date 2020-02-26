import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAcompanamientosComponent } from './solicitud-acompanamientos.component';

describe('SolicitudAcompanamientosComponent', () => {
  let component: SolicitudAcompanamientosComponent;
  let fixture: ComponentFixture<SolicitudAcompanamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAcompanamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAcompanamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
