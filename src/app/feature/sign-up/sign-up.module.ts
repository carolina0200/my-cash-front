import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/material.module';
import { SignUpService } from './service/sign-up.service';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [SignUpService]
})
export class SignUpModule { }
