import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'alumno/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'profesor/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'asignatura/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'matricula/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

  {
    path: 'asignatura/:id/alumnos',
    renderMode: RenderMode.Server
  }

];
