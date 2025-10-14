import { Component } from '@angular/core';
import { TaskService } from '../Task-Model/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  task: any[]=[];

  constructor(private Task: TaskService){}

  ngOnInit(){
    this.LoadFilteredTask();
  }

  LoadFilteredTask(){
    this.task = this.Task.getFilterTask();
  }

  setFilter(filter: 'all' | 'active' | 'completed'){
    this.Task.setFilter(filter);
    this.LoadFilteredTask();
  }

  updateTaskCompletion(id: number){
    this.Task.toggleTaskCompletion(id);
    this.LoadFilteredTask();
  }

  editTask(task: any){
    task.isEditing = true;
  }

  updateDescription(task:any){
    task.isEditing = false;
    this.Task.taskEdit(task.id, task.description);
  }

}
