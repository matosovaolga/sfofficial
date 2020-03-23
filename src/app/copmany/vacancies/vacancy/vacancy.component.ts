import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {VacanciesService} from '../vacancies.service';
import {Vacancy} from '../vacancy.model';
@Component({
  selector: 'sf-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class SFVacancyComponent {
  vacancies: [Vacancy];
  constructor(
    private router: Router,
    private vacanciesService: VacanciesService
  ) {
    this.vacanciesService.getVacancies().subscribe((resp) => {
      this.vacancies = resp;
    });
  }
}