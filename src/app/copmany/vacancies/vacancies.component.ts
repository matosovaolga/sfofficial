import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {VacanciesService} from './vacancies.service';
import {Vacancy} from './vacancy.model';
@Component({
  selector: 'sf-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class SFVacanciesComponent {
  vacancies: [Vacancy];
  title: string = 'CAREER';
  bannerText: string = 'Become part of the anovis team';
  constructor(
    private router: Router,
    private vacanciesService: VacanciesService
  ) {
    this.vacanciesService.getVacancies().subscribe((resp) => {
    
      this.vacancies = resp;
    });
  }
}