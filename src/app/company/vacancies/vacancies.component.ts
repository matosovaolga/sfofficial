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

  constructor(
    private router: Router,
    private vacanciesService: VacanciesService
  ) {
    this.vacanciesService.getVacancies().subscribe((resp) => {
      this.vacancies = resp;
    });
  }

  getName(vacancy) {
    if (!vacancy) {
      this.currentFilter = 'All'
    } else {
      this.currentFilter = vacancy.role 
    }
  }

  filterBy(arr) {
    if (this.currentFilter = 'All') return arr
    return arr.filter(el => el.role == this.currentFilter)
  }


}