import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "./task";
import {HttpClient, HttpParams} from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:48460/todos/';

  constructor(private http: HttpClient) { }

  public index(archive = false): Observable<Task[]> {
    if(!archive)
    {
      return this.http.get<Task[]>(this.apiUrl).pipe(
        map(tasks => tasks.filter(task => !task.archived))
      );
    }
    else
    {
      return this.http.get<Task[]>(this.apiUrl).pipe(
        map(tasks => tasks.filter(task => task.archived))
      );
    }
  }

  public post(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  public put(task: Task): Observable<Task> {
    const url = `${this.apiUrl}${task.id}`;
    return this.http.put<Task>(url, task);
  }

  public delete(task: Task): Observable<any> {
    const url = `${this.apiUrl}${task.id}`;
    return this.http.delete(url);
  }
}
