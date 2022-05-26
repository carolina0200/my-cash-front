import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/shared/model/usuario';
import { MyErrorStateMatcher } from '../registro/componentes/formulario-registro/formulario-registro.component';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: [undefined, [Validators.required]],
      clave: [undefined, [Validators.required]]
    });
  }

  async finish() {
    if (this.loginForm.valid) {
      const usuario: Usuario = {...this.loginForm.value};
      await firstValueFrom(this.loginService.login(usuario));
      this.router.navigateByUrl("/home");
    }
  }

}
