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
    if(this.task) {
      this.tasks.push({name: this.task});
      console.log(this.task, this.tasks);
      this.task = ''; 
    } else {
      alert('Please Enter Grocery Items!')
    }
   
  }

  remove(id:number){
    this.tasks = this.tasks.filter((v,i)=> i !==id);
  }
}

