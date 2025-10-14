import { Routes } from '@angular/router';
import { TaskInputComponent } from "./task-input/task-input.component";
import { TaskListComponent } from "./task-list/task-list.component";

export const routes: Routes = [
    {path: "", component: TaskInputComponent},
    {path: "List", component: TaskListComponent}
];
