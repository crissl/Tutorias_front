import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsistenciasComponent } from ''";

describe('RegistroAsistenciasComponent', () => {
  let component: RegistroAsistenciasComponent;
  let fixture: ComponentFixture<RegistroAsistenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAsistenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
