import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
	providedIn: 'root'
})
export class NotificationService {

    constructor(
        private _snackBar: MatSnackBar,
    ){}

    openErrorSnackBar(msg: string){
        this._snackBar.open(msg, 'X', {
            duration: 5000,
            panelClass: ['red-snackbar'],
        });
    }

    openSuccessSnackBar(msg: string){
        this._snackBar.open(msg, 'X', {
            duration: 5000,
            panelClass: ['green-snackbar'],
        });
    }
}


