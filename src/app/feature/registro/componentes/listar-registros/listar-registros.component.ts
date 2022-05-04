import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../../shared/model/registro';
import { RegistroService } from '../../shared/services/registro.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.scss']
})
export class ListarRegistrosComponent implements OnInit {

  registros: Registro[];
  data = {ingresos: 0, egresos: 0, total: 0}

  constructor(private registroService: RegistroService) { }

  async ngOnInit() {
    this.registros = (await this.registroService.getAll().toPromise()) as Registro[];
    this.ingresosYEgresos();
  }

  ingresosYEgresos(): void {
    this.registros.forEach(registro => registro.tipo == "IN" ? 
      this.data.ingresos += registro.cuanto : this.data.egresos += registro.cuanto);
    this.data.total = this.data.ingresos - this.data.egresos;
  }

}
