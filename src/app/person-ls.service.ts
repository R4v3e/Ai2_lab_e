import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';

  constructor() { }

  // Fetch all people from localStorage
  public getAll(): Person[] {
    const peopleData = localStorage.getItem(this.KEY);
    if (peopleData) {
      return JSON.parse(peopleData);
    } else {
      return [];
    }
  }

  // Fetch a single person by index
  public getPerson(index: number): Person {
    const people = this.getAll();
    return people[index];
  }

  // Add a new person to localStorage
  public addPerson(person: Person): void {
    const people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  // Delete a person by index
  public deletePerson(index: number): void {
    const people = this.getAll();
    if (people[index]) {
      people.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(people));
    }
  }
}
