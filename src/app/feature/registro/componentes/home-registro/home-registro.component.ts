import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../shared/services/registro.service';

@Component({
  selector: 'app-home-registro',
  templateUrl: './home-registro.component.html',
  styleUrls: ['./home-registro.component.scss']
})
export class HomeRegistroComponent {

  form = false;

  constructor(private registroService: RegistroService) { }

  async getRegistro(ev: any) {
    const value = await this.registroService.add(ev.value).toPromise();
    this.form = false;
  }

}
