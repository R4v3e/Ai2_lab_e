import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [HomeComponent] // Include HomeComponent in the imports array
})
export class AppComponent {
  title = 'homes';
}