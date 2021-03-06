import { Component } from '@angular/core';
import { Estudiante } from '../model/estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public students: Estudiante[];

  constructor(private service: EstudianteService) { // inyectar atributo estudianteService
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });
  }

}
