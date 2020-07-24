import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private snack: MatSnackBar) { }

  displayError(msg: string): void {

    this.snack.open(msg, undefined, {
      duration: 3000,
      panelClass: 'globalerror'
    });
  }
}
