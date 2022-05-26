import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private notification: MatSnackBar,
    private zone: NgZone,
    private router: Router
  ) {}

  handleError(error: any) {

    console.error('Error from global error handler', error.rejection.status);

    if (error instanceof HttpErrorResponse) {
      error = error.error!.mensaje || error.statusText;
      console.log(error)
    }

    this.zone.run(() => 
      {
        if(error.rejection.status == 401) {
          error = "No estas logueado"
          this.router.navigateByUrl("/login")
        }
        this.notification.open(error)
      }
    );
  }
}