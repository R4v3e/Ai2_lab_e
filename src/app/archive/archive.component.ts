import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archivedTasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.index(true).subscribe(
      (tasks: Task[]) => {
        // Assuming that the index method can take a boolean to filter archived tasks
        this.archivedTasks = tasks.filter(task => task.archived);
      },
      error => console.error('Error fetching archived tasks:', error)
    );
  }

  delete(task: Task): void {
    if (task.id) {
      this.tasksService.delete(task).subscribe(
        () => {
          this.archivedTasks = this.archivedTasks.filter(t => t.id !== task.id);
        },
        error => console.error('Error deleting task:', error)
      );
    }
  }
}
