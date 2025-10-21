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
  tasks: any[]=[];
  allTask: any[]=[];
  tasksRemaining: number = 0;
  completedTasks: number = 0;

  constructor(private Task: TaskService){}

  ngOnInit(){
    this.refreshData();

  }

  LoadFilteredTask(){
    this.tasks = this.Task.getFilterTask();
  }

  LoadAllTasks() {
    this.allTask = this.Task.getAllTasks();
  }
  

  setFilter(filter: 'all' | 'active' | 'completed'){
    this.Task.setFilter(filter);
    this.LoadAllTasks();
    this.LoadFilteredTask();
    this.updateTaskStats();
  }

  updateTaskCompletion(id: number){
    this.Task.toggleTaskCompletion(id);
    this.LoadFilteredTask();
    this.updateTaskStats();
    
  }

  editTask(task: any){
    task.isEditing = true;
  }

  updateDescription(task:any){
    task.isEditing = false;
    this.Task.taskEdit(task.id, task.description);
  }

  deleteTask(task: any){
    this.tasks.splice(task, 1);
 }

 updateTaskStats() {
  this.tasksRemaining = this.allTask.filter(task => !task.isCompleted).length;
  this.completedTasks = this.allTask.filter(task => task.isCompleted).length;
}

refreshData() {
  this.LoadAllTasks();
  this.LoadFilteredTask();
  this.updateTaskStats();
}


}
