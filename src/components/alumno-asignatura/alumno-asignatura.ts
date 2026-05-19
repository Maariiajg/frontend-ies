import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Asignatura } from '../../model/asignatura';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';
import { AsignaturaService } from '../../services/asignatura-service';

@Component({
  selector: 'app-alumnos-asignatura',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumno-asignatura.html',
  styleUrls: ['./alumno-asignatura.css']
})
export class AlumnoAsignatura implements OnInit {
  asignaturaId!: number;
  asignatura?: Asignatura;
  matriculasFiltradas: Matricula[] = [];
  
  constructor(
    private _route: ActivatedRoute,
    private _matriculaService: MatriculaService,
    private _asignaturaService: AsignaturaService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.asignaturaId = +params['id'];
      
      this._asignaturaService.getAsignaturaById(this.asignaturaId).subscribe(data => {
        this.asignatura = data;
      });
      
      this._matriculaService.getMatriculas().subscribe(data => {
        this.matriculasFiltradas = data.filter(
          matricula => matricula.asignatura.id === this.asignaturaId
        );
      });
    });
  }
}