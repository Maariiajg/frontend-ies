import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAsignatura } from './alumno-asignatura';

describe('AlumnoAsignatura', () => {
  let component: AlumnoAsignatura;
  let fixture: ComponentFixture<AlumnoAsignatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoAsignatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoAsignatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
