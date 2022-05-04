import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { HomeRegistroComponent } from './componentes/home-registro/home-registro.component';
import { ListarRegistrosComponent } from './componentes/listar-registros/listar-registros.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './shared/services/registro.service';
import { MaterialExampleModule } from 'src/app/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeRegistroComponent,
    ListarRegistrosComponent,
    FormularioRegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeRegistroComponent
  ],
  providers: [
    RegistroService
  ],
  bootstrap: [HomeRegistroComponent]
})
export class RegistroModule { }
