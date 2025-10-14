import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  properties: {id: number, description: String, isCompleted: boolean, createdAt: Date}[]=[];
  id=0;
  

  constructor() {

  }

  currentFilter: 'all' | 'active' | 'completed' = 'all';

  addTask(description: string){
    this.properties.push({id: this.idGenerator(),
      description: description,
      isCompleted: false,
      createdAt: new Date()})
  }


  idGenerator(){
    return this.id++;
  }

  taskEdit(id: number, newDescription: String){
   const task = this.properties.find(task => task.id === id);
   if(task){
    task.description = newDescription;
   }
  }

  setFilter(filter: 'all' | 'active' | 'completed'){
    this.currentFilter=filter;
  }
    getFilterTask(){
      switch (this.currentFilter){
        case 'active':
          return this.properties.filter(task => !task.isCompleted);
        case 'completed':
          return this.properties.filter(task => task.isCompleted);
        case 'all':
          default:
            return this.properties;
    }
  }

  toggleTaskCompletion(id: number){
    const task = this.properties.find(task => task.id === id);
    if(task){
      task.isCompleted = !task.isCompleted;
    }
  }
}
