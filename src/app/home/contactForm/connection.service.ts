import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    activeInput: string = '';

    // url: string = '/mail/mail.php';
    url: string = 'http://localhost/sfofficial/mail/mail.php';
    

}
