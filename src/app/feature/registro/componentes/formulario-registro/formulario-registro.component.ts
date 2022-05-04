import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Registro } from '../../shared/model/registro';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registroForm: FormGroup;
  @Output() registro = new EventEmitter<{value: Registro}>();
  @Output() cancelForm = new EventEmitter();
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

    this.registroForm = this.formBuilder.group({
      tipo: ['EG', [Validators.required]],
      concepto: ['OT', [Validators.required]],
      cuanto: ['', [Validators.required, Validators.min(0)]],
      cuando: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
      icono: ['monetization_on']
    });
  }

  finish() {
    if(this.registroForm.valid) {
      const registro: Registro = {... this.registroForm.value};
      registro.cuando += "T20:00:00"
      this.registro.emit({value: registro as Registro});
    }
  }

  cancel() {
    this.cancelForm.emit({value: true});
  }

}
