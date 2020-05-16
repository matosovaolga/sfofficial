import { Component, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {VacanciesService} from '../vacancies.service';
import {Vacancy} from '../vacancy.model';
@Component({
  selector: 'sf-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class SFVacancyComponent implements AfterViewInit {
  vacancy: Vacancy = {
    id: 0,
    role: '',
    description: '',
    skills: [''],
    skillsPlus: ['']

  };
  constructor(
    private router: Router,
    private vacanciesService: VacanciesService
  ) {
    this.vacanciesService.getSingleVacancy(1).subscribe((resp) => {
      this.vacancy = resp;
    });
  }

  ngAfterViewInit() {
  }
}