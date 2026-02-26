import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Input()
  task: Task = {
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    description: ''
  };

  @Output()
  saveTask = new EventEmitter<Task>();

  onSubmit() {

    this.saveTask.emit(this.task);

  }

}