import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { Vacancy } from '../vacancy.model';


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
  id: number;

  constructor(
    private router: Router,
    private vacanciesService: VacanciesService,
    private route: ActivatedRoute,

  ) {
    this.id = route.snapshot.params['id'];

    this.vacanciesService.getSingleVacancy(this.id).subscribe((resp) => {
      this.vacancy = resp;
    });
  }

  ngAfterViewInit() {
    window.scroll(0, 0);
  }
}