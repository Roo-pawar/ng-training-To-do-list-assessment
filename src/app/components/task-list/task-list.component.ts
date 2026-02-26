import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [];

  showForm = false;

  isEdit = false;

  selectedIndex = -1;

  selectedTask: Task = this.getEmptyTask();

  // Empty task template
  getEmptyTask(): Task {
    return {
      assignedTo: '',
      status: 'Not Started',
      dueDate: '',
      priority: 'Normal',
      description: ''
    };
  }

  // Open New Task Form
  newTask() {

    this.isEdit = false;

    this.selectedTask = this.getEmptyTask();

    this.showForm = true;

  }

  // Save Task (Add or Update)
  saveTask(task: Task) {

    if (this.isEdit) {

      this.tasks[this.selectedIndex] = { ...task };

    }
    else {

      this.tasks.push({ ...task });

    }

    this.showForm = false;

    this.selectedTask = this.getEmptyTask();

  }

  // Edit Task
  editTask(index: number) {

    this.isEdit = true;

    this.selectedIndex = index;

    this.selectedTask = { ...this.tasks[index] };

    this.showForm = true;

  }

  // Delete Task
  deleteTask(index: number) {

    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {

      this.tasks.splice(index, 1);

    }

  }

}