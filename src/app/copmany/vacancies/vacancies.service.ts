
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class VacanciesService {
    private BASE_URL: string = './assets/vacancies.json';
    private headers: HttpHeaders;
    public vacancies = new Subject<any>();
    token: string;
    
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    /*get profile*/
    getVacancies(): Observable<any> {
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});

        let url: string = `${this.BASE_URL}/`;
        return this.http.get(url, {headers: this.headers});
    }




    setVacancies(value: any) {
        this.vacancies.next(value);
    }

}