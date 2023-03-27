import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
  task?: string;
  tasks = [];

  onclick() {
    this.tasks.push({name: this.task});
    console.log(this.task, this.tasks);
    this.task = ''; 
  }
}

