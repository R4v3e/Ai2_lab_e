import { Component, OnInit } from '@angular/core';
import { PersonLsService } from '../person-ls.service';
import { Person } from '../person';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})export class AddPersonComponent {
  person: Person = {
    firstName: '',
    lastName: '',
    age: 0,
    address: {
      city: '',
      street: '',
      postCode: ''
    }
  };

  constructor(private personService: PersonLsService) {}

  onSubmit(): void {
    this.personService.addPerson(this.person);
    console.log('Person added:', this.person);

    // Optionally reset the form or navigate away
    this.resetForm();
  }

  private resetForm(): void {
    this.person = {
      firstName: '',
      lastName: '',
      age: 0,
      address: {
        city: '',
        street: '',
        postCode: ''
      }
    };
  }
}
