import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TaskService } from "../Task-Model/task.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-task-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  taskInput: string= '';
  task: any[]= [];

  constructor(private Task: TaskService){}

  addTask(){
    if(this.taskInput.trim()){
      this.Task.addTask(this.taskInput);
      this.taskInput='';
      alert("added Task");
    }
  }
  
 ngOnInit(){
   this.task = this.Task.properties;
 }
}
