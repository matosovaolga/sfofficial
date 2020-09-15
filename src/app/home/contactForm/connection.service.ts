import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {
// url: string = 'http://localhost:3000/send';
url: string = '/mail/mail.php';
constructor(private http: HttpClient) { }

sendMessage(messageContent: any) {
  return this.http.post(this.url,
  messageContent,
  { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data; charset=utf-8'), responseType: 'json' });
}
}
