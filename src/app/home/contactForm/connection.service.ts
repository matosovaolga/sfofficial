import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    activeInput: string = '';

    url: string = '/mail/mail.php';
    

}
