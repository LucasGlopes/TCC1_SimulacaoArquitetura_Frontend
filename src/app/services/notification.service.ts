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
            duration: 3000,
            panelClass: ['red-snackbar'],
        });

    }

    openSuccessSnackBar(msg: string){
        return this._snackBar.open(msg, 'X', {
            duration: 3000,
            panelClass: ['green-snackbar'],
        });
    }
}


