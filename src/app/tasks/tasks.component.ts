import { Component } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  newTask: Task = { /* initial values for a new task */ };

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.index().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (!this.newTask.title) {
      // You can implement additional validation if needed
      return;
    }

    this.tasksService.post(this.newTask).subscribe(
      (task: Task) => {
        this.tasks.push(task); // Add the new task to the list
        this.newTask = {}; // Reset the form
      },
      error => console.error('Error adding task:', error)
    );
  }
  handleChange(task: Task): void {
    if (task.id) {
      this.tasksService.put(task).subscribe(
        (updatedTask: Task) => {
        },
        error => console.error('Error updating task:', error)
      );
    }
  }

  archiveCompleted(): void {
    const completedTasks = this.tasks.filter(task => task.completed && !task.archived);

    const updateObservables = completedTasks.map(task => {
      task.archived = true;
      return this.tasksService.put(task);
    });

    // Use forkJoin to wait for all PUT requests to complete
    forkJoin(updateObservables).subscribe(
      results => {
        console.log('All tasks have been archived:', results);
        this.ngOnInit();
      },
      error => console.error('Error archiving tasks:', error)
    );
  }
}
