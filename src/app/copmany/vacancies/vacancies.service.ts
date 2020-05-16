
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class VacanciesService {
    private BASE_URL: string = './assets/';
    private headers: HttpHeaders;
    public vacancies = new Subject<any>();
    token: string;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    /*get all vacancies*/
    getVacancies(): Observable<any> {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        let url: string = `${this.BASE_URL}/vacancies.json`;
        return this.http.get(url, { headers: this.headers });
    }

    /*get all vacancies*/
    getSingleVacancy(id): Observable<any> {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        let url: string = `${this.BASE_URL}vacancy-${id}.json/`;
        return this.http.get(url, { headers: this.headers });
    }



    setVacancies(value: any) {
        this.vacancies.next(value);
    }

}