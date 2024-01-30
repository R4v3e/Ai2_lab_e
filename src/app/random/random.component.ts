import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent {
  @Input() max: number = 10;
  randomNumber: number | null = null;
  message: string = '';

  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * this.max) + 1;
    this.message = this.randomNumber < this.max * 0.5 ? 'dolna połowa wartości' : 'górna połowa wartości';
  }
}