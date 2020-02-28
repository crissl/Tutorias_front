import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRegistroComponent } from './datos-registro.component';

describe('DatosRegistroComponent', () => {
  let component: DatosRegistroComponent;
  let fixture: ComponentFixture<DatosRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
