import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/shared/model/usuario';
import { MyErrorStateMatcher } from '../registro/componentes/formulario-registro/formulario-registro.component';
import { SignUpService } from './service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      usuario: [undefined, [Validators.required]],
      clave: [undefined, [Validators.required]],
      claveConfirmada: [undefined, [Validators.required]]
    });
  }

  async finish() {
    if (this.signUpForm.valid) {
      const usuario: Usuario = {...this.signUpForm.value};
      await firstValueFrom(this.signUpService.singUp(usuario));
      this.router.navigateByUrl("/login");
    }
  }

}
