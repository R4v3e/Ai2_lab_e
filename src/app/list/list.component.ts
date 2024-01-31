import { Component, OnInit } from '@angular/core';
import { PersonLsService } from '../person-ls.service';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonLsService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.people = this.personService.getAll();
  }

  delete(index: number): void {
    this.personService.deletePerson(index);
    this.loadPeople(); // Reload the list to reflect the changes
  }
}
