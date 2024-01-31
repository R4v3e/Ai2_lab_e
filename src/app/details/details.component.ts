import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonLsService } from '../person-ls.service';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonLsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.person = this.personService.getPerson(+id);
      }
    });
  }
}
