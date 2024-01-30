import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: string[] = [];
  newItem: string = '';

  addItem(): void {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = ''; // Reset input field
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}