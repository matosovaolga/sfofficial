import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacanciesService } from './vacancies.service';
import { Vacancy } from './vacancy.model';
@Component({
  selector: 'sf-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class SFVacanciesComponent {
  vacancies: [Vacancy];
  title: string = 'CAREER';
  currentFilter: string = 'All';

  jobList = [];
  constructor(
    private router: Router,
    private vacanciesService: VacanciesService
  ) {
    this.vacanciesService.getVacancies().subscribe((resp) => {
      this.vacancies = resp;

      this.jobList = resp.reduce((arr, v) => {
        arr.push(v.role)
        return arr
      }, ['All'])

    });

  }

  getName(vacancy) {
    if (vacancy) {
      this.currentFilter = vacancy;
    }
  }
}